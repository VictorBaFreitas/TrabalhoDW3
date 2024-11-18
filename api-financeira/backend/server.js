const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const contaRoutes = require('./src/routes/contaRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', contaRoutes);

app.listen(30000, () => {
  console.log('Servidor rodando na porta 30000');
});
