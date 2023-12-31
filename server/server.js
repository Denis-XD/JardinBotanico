require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); 

app.use(express.json()); 

app.use('/uploads', express.static('uploads'));


const plantasRoutes = require('./routes/plantasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

app.use('/api/plantas', plantasRoutes);
app.use('/api/usuarios', usuariosRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = app;
