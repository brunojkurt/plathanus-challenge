import Knex from 'knex';

export async function up (knex: Knex) {
  return knex.schema.createTable('page_content', table => {
    table.increments('id').primary();
    table.string('content_name').notNullable().unique();
    table.text('content').notNullable();
  });
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('admins');
}