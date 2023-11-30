const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('knex')(require('../knexfile').development);
const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const usuarios = await knex.select('*').from('usuario');
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await knex('Usuario').where({ usuario: username }).first();
    if (user && password === user.contrasena) { 
      // Crear un token de autenticación
      const token = jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;
