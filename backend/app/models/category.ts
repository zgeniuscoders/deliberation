import { DateTime } from 'luxon'
import {BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import * as relations from "@adonisjs/lucid/types/relations";
import Matter from "#models/matter";

export default class Category extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare name: string

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @hasMany(() => Matter)
  declare matters: relations.HasMany<typeof Matter>
}
