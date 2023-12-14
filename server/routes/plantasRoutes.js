const express = require('express');
const multer = require('multer');
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);
const fs = require('fs');
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

router.delete('/eliminar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    
    const planta = await knex('Planta').where('id_planta', id).first();
    if (!planta) {
      return res.status(404).json({ error: 'Planta no encontrada' });
    }

    fs.unlink(planta.ruta_imagen, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al eliminar la imagen' });
      }

    
      knex('Planta')
        .where('id_planta', id)
        .del()
        .then(() => {
          res.json({ success: true, message: 'Planta eliminada con éxito' });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: 'Error al eliminar la planta' });
        });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});


router.put('/actualizar/:id', upload.single('imagen'), async (req, res) => {
  const id = req.params.id;
  const { nombre, nombreCientifico, beneficios, descripcion } = req.body;
  
  try {
    const planta = await knex('Planta').where('id_planta', id).first();
    if (!planta) {
      return res.status(404).json({ error: 'Planta no encontrada' });
    }

    const datosParaActualizar = {
      nombre_planta: nombre,
      nombre_cientifico: nombreCientifico,
      beneficios: beneficios,
      descripcion: descripcion
    };

    if (req.file) {
      // Si se subió una nueva imagen, elimina la antigua y actualiza la ruta
      fs.unlinkSync(planta.ruta_imagen);
      datosParaActualizar.ruta_imagen = req.file.path;
    }
     
    console.log(datosParaActualizar);
    await knex('Planta')
      .where('id_planta', id)
      .update(datosParaActualizar);

    res.json({ success: true, message: 'Planta actualizada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la planta' });
  }
});



module.exports = router;
