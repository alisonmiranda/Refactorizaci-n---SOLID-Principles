const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKeyPath = process.env.PRIVATE_KEY_PATH;
const publicKeyPath = process.env.PUBLIC_KEY_PATH;
const jwtSecret = process.env.JWT_SECRET || 'development-secret';

const getKey = (path) => {
  if (!path) return null;
  return fs.readFileSync(path, 'utf8');
};

const getHeader = (token) => {
  const decoded = jwt.decode(token, { complete: true });

  if (!decoded || !decoded.header) {
    const error = new Error('Token mal formado');
    error.name = 'InvalidTokenError';
    throw error;
  }

  return decoded.header;
};

const signToken = (user) => {
  const payload = {
    sub: user.id,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + 60,
  };

  const privateKey = getKey(privateKeyPath);

  if (privateKey) {
    return jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
    });
  }

  return jwt.sign(payload, jwtSecret, {
    algorithm: 'HS256',
  });
};

const verifyToken = (token) => {
  const header = getHeader(token);
  const publicKey = getKey(publicKeyPath);

  if (publicKey) {
    if (header.alg !== 'RS256') {
      const error = new Error('Algoritmo inválido');
      error.name = 'InvalidAlgorithmError';
      throw error;
    }

    return jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
    });
  }

  if (header.alg !== 'HS256') {
    const error = new Error('Algoritmo inválido');
    error.name = 'InvalidAlgorithmError';
    throw error;
  }

  return jwt.verify(token, jwtSecret, {
    algorithms: ['HS256'],
  });
};

module.exports = {
  signToken,
  verifyToken,
};
