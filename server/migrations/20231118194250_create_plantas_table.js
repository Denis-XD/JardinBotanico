/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('planta', function(table) {
      table.increments('id_planta').primary();
      table.string('nombre_planta', 255).notNullable();
      table.string('nombre_cientifico', 255).notNullable();
      table.text('beneficios');
      table.text('descripcion');
      table.string('ruta_imagen', 255).notNullable();
    });
  };

exports.down = function(knex) {
    return knex.schema.dropTable('planta');
  };