const express = require('express');
const multer = require('multer');
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.get('/obtener', async (req, res) => {
  try {
    const plantas = await knex.select('*').from('Planta');
    res.json(plantas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las plantas' });
  }
});

router.post('/agregar', upload.single('imagen'), async (req, res) => {
  const { nombre, nombreCientifico, beneficios, descripcion } = req.body;
  const rutaImagen = req.file.path; 

  try {
    const idPlanta = await knex('Planta').insert({
      nombre_planta: nombre,
      nombre_cientifico: nombreCientifico,
      beneficios: beneficios,
      descripcion: descripcion,
      ruta_imagen: rutaImagen
    });

    res.json({ success: true, idPlanta: idPlanta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar la planta' });
  }
});

module.exports = router;
