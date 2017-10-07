'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('normals', (table) => {
    table.increments();
    table.string('normal_name', 50).notNullable();
    table.integer('char_id')
      .references('id')
      .inTable('characters')
      .onDelete('CASCADE');
    table.string('damage').notNullable();
    table.string('guard').notNullable();
    table.string('tension').notNullable();
    table.string('risc').notNullable();
    table.string('prorate').notNullable();
    table.string('attack_lvl').notNullable();
    table.string('startup').notNullable();
    table.string('active').notNullable();
    table.string('invuln').notNullable();
    table.string('recovery').notNullable();
    table.string('frame_advantage');
    table.string('cancel');
    table.string('roman');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('normals');
};
