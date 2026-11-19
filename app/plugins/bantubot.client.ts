// Mounts BantuBot on public pages only (never on /admin). Loaded lazily at idle
// time so it does not affect LCP / TBT.
export default defineNuxtPlugin(() => {
  const router = useRouter();
  let handle: { destroy: () => void } | null = null;

  const sync = async (path: string) => {
    const allowed = !/^\/admin(\/|$)/.test(path);
    if (allowed && !handle) {
      const { mountBantuBot } = await import("~~/bantubot/widget/bantubot.js");
      handle = mountBantuBot({ endpoint: "/api/bantubot/chat", kbUrl: "/bantubot/knowledge-base.json" });
    } else if (!allowed && handle) {
      handle.destroy();
      handle = null;
    }
  };

  const start = () => sync(router.currentRoute.value.path);
  if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 4000 });
  else setTimeout(start, 1500);
  router.afterEach((to) => sync(to.path));
});
