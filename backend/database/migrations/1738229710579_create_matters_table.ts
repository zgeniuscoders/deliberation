import {BaseSchema} from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'matters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("name")
        .notNullable()
      table.string("code")
        .notNullable()

      table.integer("category_id")
        .unsigned()
        .references("categories.id")

      table.integer("major_id")
        .unsigned()
        .references("majors.id")

      table.integer("semester_id")
        .unsigned()
        .references("semesters.id")


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
