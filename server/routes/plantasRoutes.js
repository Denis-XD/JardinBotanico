const express = require('express');
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);
const router = express.Router();

// Obtener todas las plantas
router.get('/', async (req, res) => {
    try {
      const plantas = await knex('Planta').select('*');
      res.json(plantas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las plantas' });
    }
  });

  
// Agregar una nueva planta
router.post('/', async (req, res) => {
    try {
      const nuevaPlanta = req.body; // Asegúrate de validar y sanear los datos de entrada
      const ids = await knex('Planta').insert(nuevaPlanta);
      res.status(201).json({ id: ids[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar la planta' });
    }
  });

  // Actualizar una planta
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const datosPlanta = req.body; // Nuevamente, valida y sanea los datos
  
    try {
      await knex('Planta').where('id_planta', id).update(datosPlanta);
      res.status(200).json({ message: 'Planta actualizada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la planta' });
    }
  });

  // Eliminar una planta
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      await knex('Planta').where('id_planta', id).del();
      res.status(200).json({ message: 'Planta eliminada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la planta' });
    }
  });
  
module.exports = router;
