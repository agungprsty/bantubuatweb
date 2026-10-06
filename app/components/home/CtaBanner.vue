<template>
  <section class="border-b-2 border-zinc-800 bg-black py-16 sm:py-24 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="neo-box bg-neo-yellow text-black p-6 sm:p-10 lg:p-14 text-center border-3 sm:border-4 border-black shadow-[8px_8px_0px_0px_#fff] relative overflow-hidden rounded-3xl"
      >
        <!-- Background SVG Blob Graphic -->
        <div class="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center overflow-hidden">
          <img
            src="/images/gumroad/blob-bg.svg"
            alt="Background Pattern"
            class="w-[800px] h-[800px] max-w-none animate-[spin_60s_linear_infinite]"
          />
        </div>

        <!-- Dot Matrix Background Overlay -->
        <div
          class="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:16px_16px]"
        ></div>

        <!-- Floating Decorative Graphic Stickers -->
        <!-- Sticker 1: Thumbs Up (Top-Left) -->
        <div class="absolute -top-4 -left-4 sm:top-6 sm:left-8 z-20 hidden md:block">
          <div class="p-2 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000] -rotate-12 transition-transform duration-300 hover:scale-110 hover:rotate-0">
            <img src="/images/gumroad/thumbsup.svg" class="h-14 w-14 sm:h-16 sm:w-16 animate-pulse" alt="Thumbs Up" />
          </div>
        </div>

        <!-- Sticker 2: Clapping Hands (Top-Right) -->
        <div class="absolute -top-4 -right-4 sm:top-6 sm:right-8 z-20 hidden md:block">
          <div class="p-2 bg-neo-pink rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000] rotate-12 transition-transform duration-300 hover:scale-110 hover:rotate-0">
            <img src="/images/gumroad/clapping.svg" class="h-14 w-14 sm:h-16 sm:w-16" alt="Clapping Hands" />
          </div>
        </div>

        <!-- Sticker 3: Floating Coin (Bottom-Left) -->
        <div class="absolute -bottom-4 left-10 z-20 hidden lg:block">
          <img src="/images/gumroad/coin-1.svg" class="h-14 w-14 -rotate-6 animate-bounce" alt="Coin Graphic" />
        </div>

        <!-- Sticker 4: Floating Coin 2 (Bottom-Right) -->
        <div class="absolute -bottom-4 right-10 z-20 hidden lg:block">
          <img src="/images/gumroad/coin-3.svg" class="h-12 w-12 rotate-12 transition-all hover:scale-125" alt="Coin Graphic 2" />
        </div>

        <!-- Content Box -->
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <!-- Main Title -->
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
            Siap Memiliki Website Professional Untuk Bisnis Anda?
          </h2>

          <!-- Subtitle -->
          <p class="text-base sm:text-xl font-extrabold text-slate-900 max-w-2xl mx-auto leading-relaxed">
            Diskusikan konsep, kebutuhan fitur, hingga estimasi biaya secara transparan dengan tim ahli kami sekarang.
          </p>

          <!-- Animated Action -->
          <div class="pt-4 flex flex-col items-center justify-center gap-6">
            <!-- Action Button -->
            <a
              :href="wa('Halo BantuBuatWeb, saya mau konsultasi buat website untuk bisnis saya')"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-pink text-black px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 w-full sm:w-auto inline-flex items-center justify-center transition-all duration-200 group"
            >
              <AppIcon name="whatsapp" class="mr-3 h-7 w-7 transition-transform group-hover:scale-110" />
              <span>Konsultasi Sekarang</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

