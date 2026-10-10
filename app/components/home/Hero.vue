<template>
  <section class="relative overflow-hidden border-b-2 border-zinc-800 bg-black pt-8 pb-12 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        
        <!-- Hero Text -->
        <div class="space-y-4 sm:space-y-6 lg:col-span-7 relative z-10">
          <!-- Title -->
          <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight text-white">
            Jasa Website & Transformasi Digital
            <span class="inline-block rounded-lg border-2 border-black bg-neo-pink px-2.5 py-0.5 sm:px-3 sm:py-1 text-black shadow-[3px_3px_0px_0px_#fff] sm:shadow-[4px_4px_0px_0px_#fff] align-baseline my-1">Terpercaya</span>
            untuk Bisnis yang Siap Naik Kelas.
          </h1>

          <p class="text-sm sm:text-base lg:text-lg font-bold leading-relaxed text-zinc-300 max-w-2xl">
            Tingkatkan kredibilitas dan omzet bisnis Anda melalui ekosistem digital dan website modern yang dirancang khusus untuk mengonversi pengunjung jadi pelanggan secara optimal, siap SEO, serta terima beres tanpa ribet urusan teknis.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <a
              :href="wa('Halo BantuBuatWeb, saya ingin konsultasi buat website untuk bisnis saya')"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-pink text-black px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-black shadow-[4px_4px_0px_0px_#fff] sm:shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff] w-full sm:w-auto text-center justify-center"
            >
              <AppIcon name="whatsapp" class="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
              Konsultasi Sekarang
            </a>
            <a
              href="#harga"
              class="neo-btn bg-white text-black px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-black shadow-[4px_4px_0px_0px_#fff] sm:shadow-[6px_6px_0px_0px_#fff] hover:bg-neo-yellow w-full sm:w-auto text-center justify-center"
            >
              Lihat Paket
            </a>
          </div>
        </div>

        <!-- Hero Graphic Card -->
        <div class="relative lg:col-span-5">
          <div class="neo-box bg-white text-black p-4 sm:p-6 lg:p-8 shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff] border-2 border-white relative z-10">
            <div class="flex items-center justify-between border-b-2 border-black pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <span class="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 border border-black"></span>
                <span class="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-400 border border-black"></span>
                <span class="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-500 border border-black"></span>
              </div>
              <span class="text-[10px] sm:text-xs font-black uppercase bg-black text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded">bantubuat.web.id</span>
            </div>

            <!-- Center Graphic: Lottie Animated Character -->
            <div class="relative mb-4 sm:mb-6 text-center bg-neo-yellow/20 p-3 sm:p-4 rounded-xl border-2 border-black">
              <div class="flex justify-center items-center">
                <lottie-player
                  src="/images/gumroad/gumhead.json"
                  speed="1"
                  class="w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div class="absolute top-2 right-2">
                <span class="neo-badge bg-neo-green text-black text-[9px] sm:text-[10px]">STANDAR INDUSTRI</span>
              </div>
            </div>

            <div class="space-y-3 sm:space-y-4">
              <div class="rounded-xl border-2 border-black bg-neo-pink p-3 sm:p-4 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] flex items-center justify-between gap-2">
                <div>
                  <div class="text-[10px] sm:text-xs font-black uppercase tracking-wider">Pertumbuhan Bisnis</div>
                  <div class="text-base sm:text-xl lg:text-2xl font-black text-black mt-0.5">Mesin Penjualan Digital</div>
                  <div class="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight mt-0.5">Ubah traffic pengunjung jadi leads & transaksi nyata setiap hari secara konsisten.</div>
                </div>
                <img src="/images/gumroad/sales-graph.svg" class="h-10 w-auto sm:h-12 border border-black rounded p-1 bg-white shrink-0" alt="Sales Graph" />
              </div>

              <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div class="rounded-xl border-2 border-black bg-neo-yellow p-3 sm:p-4 shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] relative overflow-hidden">
                  <div class="text-sm sm:text-lg font-black text-black">High-Converting</div>
                  <div class="text-[10px] sm:text-xs font-bold text-black mt-0.5">Alur Closing Otomatis</div>
                </div>
                <div class="rounded-xl border-2 border-black bg-neo-cyan p-3 sm:p-4 shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] relative overflow-hidden">
                  <div class="text-sm sm:text-lg font-black text-black">Siap Scale-Up</div>
                  <div class="text-[10px] sm:text-xs font-bold text-black mt-0.5">Ekosistem Bisnis Modern</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Scraped Coin 2 -->
          <div class="absolute -bottom-4 -left-4 z-20 hidden sm:block">
            <img src="/images/gumroad/coin-2.svg" class="h-10 w-10 sm:h-14 sm:w-14 animate-pulse" alt="Coin 2" />
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
