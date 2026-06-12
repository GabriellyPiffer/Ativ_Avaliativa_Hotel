require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const reservaRoutes = require('./src/routes/reserva.routes');

app.use('/reserva', reservaRoutes);


const quartosRoutes = require('./src/routes/quartos.routes');

app.use('/quartos', quartosRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
