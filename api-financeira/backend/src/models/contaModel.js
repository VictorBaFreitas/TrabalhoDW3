const pool = require('../config/db');

const Conta = {
  async findAll() {
    const result = await pool.query('SELECT * FROM contas WHERE removido_conta = false');
    return result.rows;
  },

  async findById(id) {
    const result = await pool.query('SELECT * FROM contas WHERE id_conta = $1 AND removido_conta = false', [id]);
    return result.rows[0];
  },

  async create(titular_conta, numero_conta, saldo_conta) {
    const result = await pool.query(
      'INSERT INTO contas (titular_conta, numero_conta, saldo_conta) VALUES ($1, $2, $3) RETURNING *',
      [titular_conta, numero_conta, saldo_conta]
    );
    return result.rows[0];
  },

  async update(id, titular_conta, numero_conta, saldo_conta) {
    const result = await pool.query(
      'UPDATE contas SET titular_conta = $1, numero_conta = $2, saldo_conta = $3 WHERE id_conta = $4 RETURNING *',
      [titular_conta, numero_conta, saldo_conta, id]
    );
    return result.rows[0];
  },

  async delete(id) {
    const result = await pool.query(
      'UPDATE contas SET removido_conta = true WHERE id_conta = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};

module.exports = Conta;
