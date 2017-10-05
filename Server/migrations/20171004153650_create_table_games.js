'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('games', (table) => {
    table.increments();
    table.string('game_name', 50).notNullable();
    table.string('type', 15).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('games');
};
