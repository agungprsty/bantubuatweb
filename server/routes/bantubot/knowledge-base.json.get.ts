// GET /bantubot/knowledge-base.json — disajikan langsung dari bantubot/shared supaya
// widget (chip FAQ) dan system prompt server selalu memakai sumber yang sama.
import knowledgeBase from '~~/bantubot/shared/knowledge-base.json'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'public, max-age=300')
  return knowledgeBase
})
