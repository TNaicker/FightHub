'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('specials', (table) => {
    table.increments();
    table.string('special_name', 50).notNullable();
    table.integer('char_id')
      .references('id')
      .inTable('characters')
      .onDelete('CASCADE');
    table.integer('damage').notNullable();
    table.string('guard').notNullable();
    table.integer('attack_lvl').notNullable();
    table.integer('startup').notNullable();
    table.integer('active').notNullable();
    table.integer('recovery').notNullable();
    table.integer('frame_advantage');
    table.string('cancel');
    table.string('roman');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('specials');
};
