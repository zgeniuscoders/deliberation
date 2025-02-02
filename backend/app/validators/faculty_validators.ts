import vine from '@vinejs/vine'

export const createFacultyValidator = vine.compile(
    vine.object({
      name: vine.string().trim()
    })
)

export const updateFacultyValidator = vine.compile(
  vine.object({
    name: vine.string().trim()
  })
)
