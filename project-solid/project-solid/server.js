const express = require('express');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const protectedRoutes = require('./routes/protected.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/v1', authRoutes);
app.use('/v1', protectedRoutes);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
