const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Asegúrate de haber instalado el paquete jsonwebtoken
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

// Registrarse
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    // Guardar el usuario en la base de datos
    const userId = await knex('usuarios').insert({
      username,
      password: hashedPassword
    });
    res.json({ userId });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
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
