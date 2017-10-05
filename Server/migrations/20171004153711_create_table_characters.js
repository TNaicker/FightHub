'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments();
    table.string('character_name', 50).notNullable();
    table.integer('game_id')
      .references('id')
      .inTable('games')
      .onDelete('CASCADE');
    table.string('summary', 1500).notNullable();
    table.float('defense modifier').notNullable();
    table.integer('guts').notNullable();
    table.string('weight').notNullable();
    table.integer('stun resistance').notNullable();
    table.integer('RISC intertia').notNullable();
    table.integer('RISC gain').notNullable();
    table.string('jump startup').notNullable();
    table.string('backdash startup').notNullable();
    table.string('backdash invulnerability').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('characters');
};
