import {DateTime} from 'luxon'
import {BaseModel, belongsTo, column, hasMany, manyToMany} from '@adonisjs/lucid/orm'
import Course from "#models/course";
import * as relations from "@adonisjs/lucid/types/relations";
import Major from "#models/major";
import Person from "#models/person";

export default class Teacher extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare peopleId: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @hasMany(() => Course)
  declare courses: relations.HasMany<typeof Course>

  @manyToMany(() => Major)
  declare majors: relations.ManyToMany<typeof Major>

  @belongsTo(() => Person, {foreignKey: 'peopleId'})
  declare person: relations.BelongsTo<typeof Person>
}
