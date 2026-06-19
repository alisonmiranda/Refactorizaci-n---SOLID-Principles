const { signToken } = require('../services/jwt.service');

const login = (req, res) => {
  const { id = 'user-001', name = 'Usuario Demo' } = req.body;

  const token = signToken({ id, name });

  return res.status(200).json({
    token,
    expiresIn: 60,
    user: { id, name },
  });
};

module.exports = {
  login,
};
