import vine from '@vinejs/vine'

export const createPersonValidator = vine.compile(
  vine.object({
    name: vine.string()
      .trim(),
    lastname: vine.string().trim().nullable(),
    firstname: vine.string().trim(),
    gender: vine.string().trim(),
  })
)

