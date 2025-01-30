import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column, hasMany} from '@adonisjs/lucid/orm'
import Major from "#models/major";
import * as relations from "@adonisjs/lucid/types/relations";
import Course from "#models/course";
import Category from "#models/category";
import Semester from "#models/semester";

export default class Matter extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @belongsTo(() => Semester)
  declare semesters: relations.BelongsTo<typeof Semester>

  @belongsTo(() => Major)
  declare major: relations.BelongsTo<typeof Major>

  @belongsTo(() => Category)
  declare category: relations.BelongsTo<typeof Category>

  @hasMany(() => Course)
  declare courses: relations.HasMany<typeof  Course>
}
