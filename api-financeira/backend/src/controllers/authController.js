const Usuario = require('../models/usuarioModel');
const jwtUtils = require('../utils/jwtUtils');
const bcrypt = require('bcryptjs');

const authController = {
  async create(req, res) {
    const { nome_usuario, email_usuario, senha_usuario } = req.body;

    try {
      const usuarioExistente = await Usuario.findByEmail(email_usuario);
      if (usuarioExistente) {
        return res.status(400).json({ message: 'E-mail já cadastrado' });
      }
      const novoUsuario = await Usuario.create(nome_usuario, email_usuario, senha_usuario);
      res.status(201).json({ message: 'Usuário criado com sucesso', usuario: novoUsuario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar o usuário', error: error.message });
    }
  },

  async login(req, res) {
    const { email_usuario, senha_usuario } = req.body;

    try {
      const usuario = await Usuario.findByEmail(email_usuario);
      if (!usuario) {
        return res.status(400).json({ message: 'Usuário não encontrado' });
      }

      const senhaValida = await bcrypt.compare(senha_usuario, usuario.senha_usuario);
      if (!senhaValida) {
        return res.status(400).json({ message: 'Senha incorreta' });
      }
      const token = jwtUtils.generateToken(usuario.id_usuario);
      res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
  },
};

module.exports = authController;
