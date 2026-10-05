<template>
  <section class="border-b-2 border-zinc-800 bg-black py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="neo-box bg-neo-yellow text-black p-8 sm:p-14 text-center border-2 sm:border-4 border-black shadow-[8px_8px_0px_0px_#fff] relative overflow-hidden rounded-2xl">

        <h2 class="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight max-w-3xl mx-auto">
          Siap Memiliki Website Professional Untuk Bisnis Anda?
        </h2>
        
        <p class="text-base sm:text-lg font-bold text-slate-900 mt-4 max-w-2xl mx-auto leading-relaxed">
          Diskusikan konsep, kebutuhan fitur, hingga estimasi biaya secara transparan dengan tim ahli kami sekarang.
        </p>

        <div class="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            :href="wa('Halo BantuBuatWeb, saya mau konsultasi buat website untuk bisnis saya')"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-neo-pink text-black px-8 py-4 text-lg font-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 w-full sm:w-auto inline-flex items-center justify-center"
          >
            <AppIcon name="whatsapp" class="mr-3 h-6 w-6" />
            Konsultasi WhatsApp Sekarang
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
