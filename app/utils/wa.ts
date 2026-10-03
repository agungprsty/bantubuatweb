export const WA_NUMBER = '6289686804015'
export const wa = (text: string = 'Halo BantuBuatWeb, saya ingin konsultasi pembuatan website') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`