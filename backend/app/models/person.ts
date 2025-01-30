import { DateTime } from 'luxon'
import {BaseModel,  column, hasOne} from '@adonisjs/lucid/orm'
import Student from "#models/student";
import * as relations from "@adonisjs/lucid/types/relations";
import Teacher from "#models/teacher";

export default class Person extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @hasOne(() => Student)
  declare student: relations.HasOne<typeof Student>

  @hasOne(() => Teacher)
  declare teacher: relations.HasOne<typeof Teacher>
}
