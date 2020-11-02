import Knex from 'knex';

export async function up (knex: Knex) {
  return knex.schema.createTable('banner_images', table => {
    table.increments('id').primary();
    table.string('filename').notNullable();
    table.string('path').notNullable();
  });
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('admins');
}