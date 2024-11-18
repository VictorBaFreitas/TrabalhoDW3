const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_API;

const jwtUtils = {
  generateToken(id_usuario) {
    return jwt.sign({ id_usuario }, SECRET, { expiresIn: '1h' });
  },

  verifyToken(token) {
    try {
      return jwt.verify(token, SECRET);
    } catch (err) {
      throw new Error('Token inválido');
    }
  }
};

module.exports = jwtUtils;
