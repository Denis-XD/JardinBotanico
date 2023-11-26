/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('usuario', function(table) {
      table.renameColumn('contraseña', 'contrasena');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('usuario', function(table) {
      table.renameColumn('contrasena', 'contraseña');
    });
  };
  