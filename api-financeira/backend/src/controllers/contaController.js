// controllers/contaController.js
const Conta = require('../models/contaModel');

const contaController = {
  async getAllContas(req, res) {
    try {
      const contas = await Conta.findAll();
      res.json(contas);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao buscar contas' });
    }
  },

  async getContaById(req, res) {
    const { id } = req.params;
    try {
      const conta = await Conta.findById(id);
      if (!conta) {
        return res.status(404).json({ message: 'Conta não encontrada' });
      }
      res.json(conta);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao buscar a conta' });
    }
  },

  async createConta(req, res) {
    const { titular_conta, numero_conta, saldo_conta } = req.body;
    try {
      if (!titular_conta || !numero_conta || !saldo_conta) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }

      const conta = await Conta.create(titular_conta, numero_conta, saldo_conta);
      res.status(201).json(conta);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao criar a conta' });
    }
  },

  async updateConta(req, res) {
    const { id } = req.params;
    const { titular_conta, numero_conta, saldo_conta } = req.body;
    try {
      const conta = await Conta.update(id, titular_conta, numero_conta, saldo_conta);
      if (!conta) {
        return res.status(404).json({ message: 'Conta não encontrada' });
      }
      res.json(conta);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao atualizar a conta' });
    }
  },

  async deleteConta(req, res) {
    const { id } = req.params;
    try {
      const conta = await Conta.delete(id);
      if (!conta) {
        return res.status(404).json({ message: 'Conta não encontrada' });
      }
      res.json({ message: 'Conta removida com sucesso' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao excluir a conta' });
    }
  }
};

module.exports = contaController;
