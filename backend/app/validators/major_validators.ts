import vine from '@vinejs/vine'

export const createMajorValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4),
    facultyId: vine.number().exists({table: 'faculties',column: 'id'})
  })
)

