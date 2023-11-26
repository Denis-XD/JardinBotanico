require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Permite todas las solicitudes CORS

app.use(express.json()); // Middleware para parsear el body a JSON

const plantasRoutes = require('./routes/plantasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

app.use('/api/plantas', plantasRoutes);
app.use('/api/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});