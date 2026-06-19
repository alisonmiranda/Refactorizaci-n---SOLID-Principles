const { verifyToken } = require('../services/jwt.service');

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Token ausente o formato inválido',
    });
  }

  const token = authorization.replace('Bearer ', '').trim();

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }

    if (error.name === 'InvalidAlgorithmError' || error.name === 'InvalidTokenError') {
      return res.status(401).json({ error: error.name === 'InvalidAlgorithmError' ? 'Algoritmo inválido' : 'Token mal formado' });
    }

    return res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = authMiddleware;
