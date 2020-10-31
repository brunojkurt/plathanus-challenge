import Knex from 'knex';

export async function up (knex: Knex) {
  return knex.schema.createTable('welcome_content', table => {
    table.increments('id').primary();
    table.string('img_name').notNullable();
    table.string('text').notNullable();
  });
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('admins');
}