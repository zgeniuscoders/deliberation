import vine from '@vinejs/vine'

export const createMatterValidator = vine.compile(
  vine.object({
    code: vine.string().trim(),
    name: vine.string()
      .trim()
      .unique({table: 'semesters', column: 'name'}),
    majorId: vine.number().exists({table: 'majors', column: 'id'}),
    categoryId: vine.number().exists({table: 'categories', column: 'id'}),
    semesterId: vine.number().exists({table: 'semesters', column: 'id'}),
  })
)

