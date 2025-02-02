import vine from '@vinejs/vine'

export const createSemesterValidator = vine.compile(
  vine.object({
    name: vine.string()
      .trim()
      .unique({table: 'semesters', column: 'name'}),
  })
)

