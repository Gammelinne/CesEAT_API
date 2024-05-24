import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { DateTime } from 'luxon'
export const UserFactory = factory
  .define(User, async ({ faker }) => {
    /*
      table.uuid('id').notNullable().primary().unique()
      table.string('first_name', 64).notNullable()
      table.string('last_name', 64).notNullable()
      table.string('role', 8).notNullable()
      table.string('email', 64).notNullable().unique()
      table.dateTime('email_verified_at').nullable()
      table.string('phone', 32).notNullable().unique()
      table.string('password', 64).notNullable()
      */
    return {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement([
        'User',
        'Deliverer',
        'technical',
        'Developper',
        'restaurateur',
        'admin',
      ]),
      emailVerifiedAt: faker.helpers.arrayElement([0, 1]) === 1 ? DateTime.now() : null,
      phone: faker.phone.number(),
      password: 'bob',
    }
  })
  .build()
