import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column, hasMany, manyToMany} from '@adonisjs/lucid/orm'
import Matter from "#models/matter";
import * as relations from "@adonisjs/lucid/types/relations";
import Teacher from "#models/teacher";
import Faculty from "#models/faculty";
import Student from "#models/student";

export default class Major extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare name: string

  @column()
  declare facultyId: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @belongsTo(() => Faculty)
  declare faculty: relations.BelongsTo<typeof Faculty>

  @hasMany(() => Matter)
  declare matters: relations.HasMany<typeof Matter>

  @hasMany(() => Student)
  declare students: relations.HasMany<typeof Student>

  @manyToMany(() => Teacher)
  declare teachers: relations.ManyToMany<typeof Teacher>
}
