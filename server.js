import express from 'express';
import dataRoutes from './router/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', dataRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Funciona :)' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
