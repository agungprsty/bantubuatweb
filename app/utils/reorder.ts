// Tukar item ke atas (-1) / ke bawah (+1); dipakai tombol urut paket & FAQ
export const moved = <T>(list: T[], i: number, dir: -1 | 1) => {
  const next = [...list]
  ;[next[i], next[i + dir]] = [next[i + dir]!, next[i]!]
  return next
}
