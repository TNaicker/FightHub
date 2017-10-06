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
    table.float('defense_modifier').notNullable();
    table.integer('guts').notNullable();
    table.string('weight').notNullable();
    table.integer('stun_resistance').notNullable();
    table.integer('RISC_intertia').notNullable();
    table.integer('RISC_gain').notNullable();
    table.string('jump_startup').notNullable();
    table.string('backdash_startup').notNullable();
    table.string('backdash_invulnerability').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('characters');
};
