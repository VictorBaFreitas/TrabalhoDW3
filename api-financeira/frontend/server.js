const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { email_usuario, senha_usuario } = req.body;
  try {
    const response = await axios.post('http://localhost:30000/api/auth/login', {
      email_usuario,
      senha_usuario
    });
    const token = response.data.token;
    res.redirect(`/dashboard?token=${token}`);
  } catch (error) {
    res.render('login', { error: 'Login falhou. Por favor, tente novamente.' });
  }
});

app.get('/dashboard', (req, res) => {
  const token = req.query.token;
  res.render('dashboard', { token });
});

app.get('/manageAccount', (req, res) => {
    const token = req.query.token;
    const accountId = req.query.accountId || '';
    res.render('manageAccount', { token, accountId });
  });  

app.listen(40000, () => {
  console.log('Servidor frontend rodando na porta 40000');
});