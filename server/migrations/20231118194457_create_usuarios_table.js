/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function(table) {
      table.increments('id_usuario').primary();
      table.string('nombre', 255).notNullable();
      table.string('usuario', 255).notNullable().unique();
      table.string('contraseña', 255).notNullable();
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
  };
  