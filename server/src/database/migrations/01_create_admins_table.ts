import Knex from 'knex';

export async function up (knex: Knex) {
  return knex.schema.createTable('admins', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('password', 60).notNullable();
    table.timestamp('created_at').notNullable()
      .defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('admins');
}