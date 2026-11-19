// Browser E2E against `npm run demo` (mock mode). Uses system Chrome via playwright-core.
import { chromium } from "playwright-core";
import assert from "node:assert/strict";

const BASE = process.env.BASE_URL || "http://localhost:4173";
const browser = await chromium.launch({ executablePath: process.env.CHROME || "/usr/bin/google-chrome", headless: true });
const results: string[] = [];

for (const [name, viewport] of [["desktop", { width: 1366, height: 800 }], ["mobile", { width: 390, height: 844 }]] as const) {
  const page = await browser.newPage({ viewport });
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(BASE, { waitUntil: "load" });

  const launcher = page.locator("#bantubot-root .launcher");
  await launcher.waitFor({ timeout: 8000 });
  await launcher.click();
  const panel = page.locator("#bantubot-root .panel");
  await panel.waitFor({ state: "visible" });
  assert.equal(await launcher.getAttribute("aria-expanded"), "true");

  // FAQ chip answers instantly from the KB (no API call).
  let apiCalls = 0;
  page.on("request", (r) => r.url().includes("/api/bantubot/chat") && apiCalls++);
  await page.locator("#bantubot-root .chip", { hasText: "Berapa lama pengerjaan?" }).click();
  await page.locator("#bantubot-root .msg.bot", { hasText: "5–10 hari kerja" }).waitFor();
  assert.equal(apiCalls, 0, "chip must not hit the API");

  // Free text goes to the API.
  await page.locator("#bantubot-root textarea").fill("apakah bisa pakai domain .id?");
  await page.keyboard.press("Enter");
  await page.locator("#bantubot-root .msg.bot", { hasText: "mode demo" }).waitFor();
  assert.equal(apiCalls, 1);
  assert.equal(await page.locator("#bantubot-root .wa-card").count(), 0, "no escalation for a plain question");

  // Buying intent -> WhatsApp escalation card with prefilled context.
  await page.locator("#bantubot-root textarea").fill("saya mau pesan paket toko online");
  await page.locator("#bantubot-root .send").click();
  const wa = page.locator("#bantubot-root .wa-card a.wa-btn");
  await wa.waitFor();
  const href = (await wa.getAttribute("href"))!;
  assert.ok(href.startsWith("https://wa.me/6289686804015?text="));
  assert.match(decodeURIComponent(href), /mau pesan paket toko online/);
  assert.match(decodeURIComponent(href), /Kebutuhan: Pesan website/);

  // XSS: model/user text must render as text.
  await page.locator("#bantubot-root textarea").fill('<img src=x onerror="window.__pwned=1">');
  await page.keyboard.press("Enter");
  await page.waitForTimeout(400);
  assert.equal(await page.evaluate(() => (window as unknown as { __pwned?: number }).__pwned), undefined);
  assert.equal(await page.locator("#bantubot-root .msg img").count(), 0);

  // Panel fits the viewport.
  const box = (await panel.boundingBox())!;
  assert.ok(box.x >= 0 && box.x + box.width <= viewport.width + 1, `panel overflows on ${name}`);

  // Escape closes and returns focus.
  await page.keyboard.press("Escape");
  await panel.waitFor({ state: "hidden" });

  await launcher.click();
  await page.screenshot({ path: `demo/screenshot-${name}.png` });
  assert.deepEqual(errors, [], `console errors on ${name}: ${errors.join("; ")}`);
  results.push(`${name}: OK`);
  await page.close();
}
await browser.close();
console.log(results.join("\n"));
