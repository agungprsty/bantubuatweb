export default defineEventHandler(async (event) => {
  const settings = parseSettings(await readBody(event))
  saveSettings(settings)
  return settings
})
