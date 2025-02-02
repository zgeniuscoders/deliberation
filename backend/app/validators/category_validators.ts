import vine from '@vinejs/vine'

export const createCategoryValidator = vine.compile(
  vine.object({
    name: vine.string()
      .trim()
      .unique({table: 'categories', column: 'name'}),
  })
)

