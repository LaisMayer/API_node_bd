import dataRoutes from './router/router.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(_dirname, 'public')));

app.use('/', dataRoutes);

app.get('/', (res, req)=>{
    res.sendFile(path.join(_dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});