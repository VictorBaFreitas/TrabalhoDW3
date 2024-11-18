const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const Usuario = {
  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM usuarios WHERE email_usuario = $1 AND removido_usuario = false', [email]);
    return result.rows[0];
  },

  async create(nome_usuario, email_usuario, senha_usuario) {
    const hashedPassword = await bcrypt.hash(senha_usuario, 10);
    const result = await pool.query(
      'INSERT INTO usuarios (nome_usuario, email_usuario, senha_usuario) VALUES ($1, $2, $3) RETURNING *',
      [nome_usuario, email_usuario, hashedPassword]
    );
    return result.rows[0];
  },
};

module.exports = Usuario;
