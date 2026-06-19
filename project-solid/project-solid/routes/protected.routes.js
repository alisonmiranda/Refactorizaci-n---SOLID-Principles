const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/service-alpha/private', authMiddleware, (_req, res) => {
  res.status(200).json({
    service: 'service-alpha',
    message: 'Acceso autorizado',
    user: _req.user,
  });
});

router.get('/service-beta/private', authMiddleware, (_req, res) => {
  res.status(200).json({
    service: 'service-beta',
    message: 'Acceso autorizado',
    user: _req.user,
  });
});

module.exports = router;
