import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})
export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true, columnName: 'id' })
  declare id: string

  @column({ columnName: 'first_name' })
  declare firstName: string

  @column({ columnName: 'last_name' })
  declare lastName: string

  @column({ columnName: 'role' })
  declare role: string

  @column({ columnName: 'email' })
  declare email: string

  @column.dateTime({ columnName: 'email_verified_at' })
  declare emailVerifiedAt: DateTime | null

  @column({ columnName: 'phone' })
  declare phone: string

  @column({ serializeAs: null, columnName: 'password' })
  declare password: string
  /*
  @column({ columnName: 'address_line1' })
  declare addressLine1: string

  @column({ columnName: 'address_line2' })
  declare addressLine2: string | null

  @column({ columnName: 'city' })
  declare city: string

  @column({ columnName: 'state' })
  declare state: string

  @column({ columnName: 'postal_code' })
  declare postalCode: string

  @column({ columnName: 'country' })
  declare country: string
  */
  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}
