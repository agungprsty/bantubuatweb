export interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole: string
  category: string
  tags: string[]
  readTime: string
  image: string
  content: string
}

const MONTH_MAP: Record<string, number> = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
}

export const parseIndoDate = (dateStr: string): number => {
  const parts = dateStr.trim().split(/\s+/)
  if (parts.length >= 3) {
    const day = parseInt(parts[0], 10)
    const month = MONTH_MAP[parts[1].toLowerCase()] ?? 0
    const year = parseInt(parts[2], 10)
    return new Date(year, month, day).getTime()
  }
  return 0
}

function parseMarkdownArticle(filepath: string, raw: string): Article {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    throw new Error(`Invalid frontmatter in article: ${filepath}`)
  }

  const yamlBlock = match[1]
  const content = match[2].trim()

  const metadata: Record<string, any> = {}
  for (const line of yamlBlock.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    let val = line.slice(colonIdx + 1).trim()

    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    } else if (val.startsWith('[') && val.endsWith(']')) {
      try {
        val = JSON.parse(val.replace(/'/g, '"'))
      } catch {
        val = val
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
      }
    }
    metadata[key] = val
  }

  const slug = filepath.split('/').pop()?.replace(/\.md$/, '') || ''

  return {
    slug,
    title: metadata.title || '',
    description: metadata.description || '',
    date: metadata.date || '',
    author: metadata.author || '',
    authorRole: metadata.authorRole || '',
    category: metadata.category || '',
    tags: Array.isArray(metadata.tags) ? metadata.tags : [],
    readTime: metadata.readTime || '',
    image: metadata.image || '/og-cover.webp',
    content,
  }
}

// Otomatis memuat seluruh file markdown artikel di direktori content/blog/
const rawArticles = import.meta.glob<string>('../../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const ARTICLES: Article[] = Object.entries(rawArticles).map(([path, raw]) =>
  parseMarkdownArticle(path, raw)
)

export const getArticleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug)

export const getSortedArticles = () =>
  [...ARTICLES].sort((a, b) => parseIndoDate(b.date) - parseIndoDate(a.date))
