import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary().unique()
      table.string('first_name', 64).notNullable()
      table.string('last_name', 64).notNullable()
      table.string('role', 8).notNullable()
      table.string('email', 64).notNullable().unique()
      table.dateTime('email_verified_at').nullable()
      table.string('phone', 32).notNullable().unique()
      table.string('password', 64).notNullable()
      /*
      table.string('address_line1', 255).notNullable()
      table.string('address_line2', 255).nullable()
      table.string('city', 100).notNullable()
      table.string('state', 100).notNullable()
      table.string('postal_code', 20).notNullable()
      table.string('country', 100).notNullable()
      */
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
