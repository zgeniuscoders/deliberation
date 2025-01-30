import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import Matter from "#models/matter";
import * as relations from "@adonisjs/lucid/types/relations";
import Teacher from "#models/teacher";

export default class Course extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @belongsTo(() => Matter)
  declare matter: relations.BelongsTo<typeof Matter>

  @belongsTo(() => Teacher)
  declare teacher: relations.BelongsTo<typeof Teacher>
}
