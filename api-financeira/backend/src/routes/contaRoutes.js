const express = require('express');
const contaController = require('../controllers/contaController');
const jwtUtils = require('../utils/jwtUtils');
const router = express.Router();

function verificarToken(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(403).json({ message: 'Acesso negado' });

  try {
    const payload = jwtUtils.verifyToken(token);
    req.usuario = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

router.get('/contas', verificarToken, contaController.getAllContas);
router.get('/contas/:id', verificarToken, contaController.getContaById);
router.post('/contas', verificarToken, contaController.createConta);
router.put('/contas/:id', verificarToken, contaController.updateConta);
router.delete('/contas/:id', verificarToken, contaController.deleteConta);

module.exports = router;
