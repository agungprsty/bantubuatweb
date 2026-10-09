<template>
  <section class="relative overflow-hidden border-b-2 border-zinc-800 bg-black pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-12">
        
        <!-- Hero Text -->
        <div class="space-y-6 lg:col-span-7 relative z-10">
          <!-- Title -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] text-white">
            Jasa Konsultasi dan Pengembangan Website
            <span class="inline-block rounded-lg border-2 border-black bg-neo-pink px-3 py-1 text-black shadow-[4px_4px_0px_0px_#fff] align-baseline my-1">Profesional</span>
            untuk Akselerasi Bisnis Anda.
          </h1>

          <p class="text-lg sm:text-xl font-bold leading-relaxed text-zinc-300 max-w-2xl">
            BantuBuatWeb membangun website profesional untuk UMKM, brand, dan perusahaan. Dirancang khusus agar cepat dibuka, terstruktur rapi, dan siap ditemukan di pencarian Google.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              :href="wa('Halo BantuBuatWeb, saya ingin konsultasi buat website untuk bisnis saya')"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-pink text-black px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff]"
            >
              <AppIcon name="whatsapp" class="mr-3 h-6 w-6" />
              Konsultasi Sekarang
            </a>
            <a
              href="#harga"
              class="neo-btn bg-white text-black px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-black shadow-[6px_6px_0px_0px_#fff] hover:bg-neo-yellow"
            >
              Lihat Paket
            </a>
          </div>
        </div>

        <!-- Hero Graphic Card -->
        <div class="relative lg:col-span-5">
          <div class="neo-box bg-white text-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#fff] border-2 border-white relative z-10">
            <div class="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
              <div class="flex items-center gap-2">
                <span class="h-4 w-4 rounded-full bg-red-500 border border-black"></span>
                <span class="h-4 w-4 rounded-full bg-yellow-400 border border-black"></span>
                <span class="h-4 w-4 rounded-full bg-green-500 border border-black"></span>
              </div>
              <span class="text-xs font-black uppercase bg-black text-white px-3 py-1 rounded">bantubuat.web.id</span>
            </div>

            <!-- Center Graphic: Lottie Animated Character -->
            <div class="relative mb-6 text-center bg-neo-yellow/20 p-4 rounded-xl border-2 border-black">
              <div class="flex justify-center items-center">
                <lottie-player
                  src="/images/gumroad/gumhead.json"
                  speed="1"
                  class="w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div class="absolute top-2 right-2">
                <span class="neo-badge bg-neo-green text-black text-[10px]">STANDAR INDUSTRI</span>
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-xl border-2 border-black bg-neo-pink p-4 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
                <div>
                  <div class="text-xs font-black uppercase">Fitur Utama</div>
                  <div class="text-lg sm:text-2xl font-black text-black mt-0.5">Order via WhatsApp</div>
                  <div class="text-[11px] font-bold text-slate-900">Pengunjung bisa langsung kirim pesan dalam 1 klik.</div>
                </div>
                <img src="/images/gumroad/sales-graph.svg" class="h-12 w-auto border border-black rounded p-1 bg-white" alt="Sales Graph" />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="rounded-xl border-2 border-black bg-neo-yellow p-4 shadow-[3px_3px_0px_0px_#000] relative overflow-hidden">
                  <div class="text-lg sm:text-2xl font-black text-black">&lt; 2 Detik</div>
                  <div class="text-xs font-bold text-black">Kecepatan Load</div>
                </div>
                <div class="rounded-xl border-2 border-black bg-neo-cyan p-4 shadow-[3px_3px_0px_0px_#000] relative overflow-hidden">
                  <div class="text-lg sm:text-2xl font-black text-black">30 Hari</div>
                  <div class="text-xs font-bold text-black">Garansi Pemeliharaan</div>
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
