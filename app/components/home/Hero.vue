<template>
  <section class="relative overflow-hidden border-b-2 border-zinc-800 bg-black pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-12">
        
        <!-- Hero Text -->
        <div class="space-y-6 lg:col-span-7 relative z-10">
          
          <!-- Floating Decorative Scraped Coin -->
          <div class="absolute -top-10 -left-6 hidden sm:block">
            <img src="/images/gumroad/coin-1.svg" class="h-10 w-10 animate-bounce duration-1000" alt="Coin 1" />
          </div>

          <!-- Badge -->
          <div class="inline-flex items-center gap-2 rounded-full border-2 border-white bg-neo-yellow px-4 py-1.5 font-black text-xs uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#fff]">
            <img src="/images/gumroad/thumbsup.svg" class="h-4 w-4" alt="Thumbsup" />
            Jasa Pembuatan Website #1 Indonesia
          </div>

          <!-- Title with High Impact Neo-Brutalist Highlighting -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.25] text-white">
            Website
            <span class="inline-block rounded-lg border-2 border-black bg-neo-pink px-3 py-1 text-black shadow-[4px_4px_0px_0px_#fff] align-baseline my-1">Cepat</span>
            &amp; High Converting Untuk Bisnis Anda.
          </h1>

          <p class="text-lg sm:text-xl font-bold leading-relaxed text-zinc-300 max-w-2xl">
            BantuBuatWeb membantu UMKM, Startup, dan Perusahaan membangun website profesional berstandar tinggi, super cepat dan SEO optimized, tanpa ribet &amp; bergaransi 30 hari.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              :href="wa('Halo BantuBuatWeb, saya ingin konsultasi buat website untuk bisnis saya')"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-pink text-black px-8 py-4 text-lg font-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff]"
            >
              <AppIcon name="whatsapp" class="mr-3 h-6 w-6" />
              Konsultasi WhatsApp Gratis
            </a>
            <a
              href="#harga"
              class="neo-btn bg-white text-black px-8 py-4 text-lg font-black shadow-[6px_6px_0px_0px_#fff] hover:bg-neo-yellow"
            >
              Lihat Paket &amp; Harga
            </a>
          </div>

          <!-- Value Highlights -->
          <div class="grid grid-cols-3 gap-3 pt-6 border-t-2 border-zinc-800">
            <div class="flex items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-neo-green font-black text-xs text-black border border-black">✓</span>
              <span class="text-xs sm:text-sm font-extrabold text-zinc-300">Load &lt; 2 Detik</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-neo-yellow font-black text-xs text-black border border-black">✓</span>
              <span class="text-xs sm:text-sm font-extrabold text-zinc-300">SEO Ready</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-neo-cyan font-black text-xs text-black border border-black">✓</span>
              <span class="text-xs sm:text-sm font-extrabold text-zinc-300">Garansi 30 Hari</span>
            </div>
          </div>
        </div>

        <!-- Hero Graphic Card with Scraped Gumroad Assets -->
        <div class="relative lg:col-span-5">
          <div class="neo-box bg-white text-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#fff] border-2 border-white relative z-10">
            <div class="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
              <div class="flex items-center gap-2">
                <span class="h-4 w-4 rounded-full bg-red-500 border border-black"></span>
                <span class="h-4 w-4 rounded-full bg-yellow-400 border border-black"></span>
                <span class="h-4 w-4 rounded-full bg-green-500 border border-black"></span>
              </div>
              <span class="text-xs font-black uppercase bg-black text-white px-3 py-1 rounded">bantubuatweb.com</span>
            </div>

            <!-- Center Graphic: Lottie Animated Gumhead Character -->
            <div class="relative mb-6 text-center bg-neo-yellow/20 p-4 rounded-xl border-2 border-black">
              <div class="flex justify-center items-center">
                <lottie-player
                  src="/images/gumroad/gumhead.json"
                  speed="1"
                  class="w-44 h-44 sm:w-52 sm:h-52"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div class="absolute top-2 right-2">
                <span class="neo-badge bg-neo-green text-black text-[10px]">LIVE ANIMATION</span>
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-xl border-2 border-black bg-neo-pink p-4 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
                <div>
                  <div class="text-xs font-black uppercase">Statistik Hasil</div>
                  <div class="text-2xl font-black text-black mt-0.5">+150% Konversi Sales</div>
                  <div class="text-[11px] font-bold text-slate-900">Struktur UI didesain khusus untuk omzet.</div>
                </div>
                <img src="/images/gumroad/sales-graph.svg" class="h-12 w-auto border border-black rounded p-1 bg-white" alt="Sales Graph" />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="rounded-xl border-2 border-black bg-neo-yellow p-4 shadow-[3px_3px_0px_0px_#000] relative overflow-hidden">
                  <div class="text-2xl font-black text-black">99.9%</div>
                  <div class="text-xs font-bold text-black">Performance Score</div>
                </div>
                <div class="rounded-xl border-2 border-black bg-neo-cyan p-4 shadow-[3px_3px_0px_0px_#000] relative overflow-hidden">
                  <div class="text-2xl font-black text-black">24/7</div>
                  <div class="text-xs font-bold text-black">Fast Support</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Scraped Coin 2 -->
          <div class="absolute -bottom-6 -left-6 z-20 hidden sm:block">
            <img src="/images/gumroad/coin-2.svg" class="h-14 w-14 animate-pulse" alt="Coin 2" />
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
