// Proyek yang ditandai "Tampilkan di Portofolio" di admin. Key sama → satu request untuk beranda & /proyek.
export const usePortfolio = () => useFetch('/api/public/portfolio', { key: 'portfolio', default: () => [] })
