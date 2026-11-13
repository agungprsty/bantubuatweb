export default defineEventHandler(async (event) => {
  const project = parseProject(await readBody(event))
  const { lastInsertRowid } = useDb().prepare(insertSql('projects', project)).run(project)
  return { id: Number(lastInsertRowid) }
})
