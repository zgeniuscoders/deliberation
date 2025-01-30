import { DateTime } from 'luxon'
import {BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import Matter from "#models/matter";
import * as relations from "@adonisjs/lucid/types/relations";
import Teacher from "#models/teacher";

export default class Major extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @hasMany(() => Matter)
  declare matters: relations.HasMany<typeof Matter>

  @hasMany(() => Teacher)
  declare teachers: relations.HasMany<typeof Teacher>
}
