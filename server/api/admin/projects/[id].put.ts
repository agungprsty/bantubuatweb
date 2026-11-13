export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const project = parseProject(await readBody(event))
  const { changes } = useDb().prepare(updateSql('projects', project, `, updated_at = datetime('now')`)).run({ ...project, id })
  assertFound(changes)
  return { ok: true }
})
