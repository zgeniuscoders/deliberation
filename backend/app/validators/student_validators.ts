import vine from '@vinejs/vine'

export const createStudentValidator = vine.compile(
  vine.object({
    name: vine.string()
      .trim(),
    lastname: vine.string().trim(),
    firstname: vine.string().trim(),
    gender: vine.string().trim(),
    majorId: vine.number().exists({table: 'majors', column: 'id'}),
  })
)

