import { DateTime } from 'luxon'
import {BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import Course from "#models/course";
import * as relations from "@adonisjs/lucid/types/relations";

export default class Teacher extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @hasMany(() => Course)
  declare courses: relations.HasMany<typeof Course>
}
