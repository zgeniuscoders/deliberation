import {BaseSchema} from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("name")
        .notNullable()
      table.integer("credit")
        .notNullable()

      table.integer("matter_id")
        .unsigned()
        .references("matters.id")

      table.integer("teacher_id")
        .unsigned()
        .references("teachers.id")

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
