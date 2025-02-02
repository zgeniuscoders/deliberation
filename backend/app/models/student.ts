import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from "#models/user";
import * as relations from "@adonisjs/lucid/types/relations";
import Person from "#models/person";
import Major from "#models/major";

export default class Student extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare personId: number

  @column()
  declare majorId: number

  @column()
  declare userId: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>

  @belongsTo(() => Person)
  declare person: relations.BelongsTo<typeof Person>

  @belongsTo(() => Major)
  declare major: relations.BelongsTo<typeof Major>
}
