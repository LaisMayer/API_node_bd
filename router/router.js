import { Router } from "express";
import { getAllDados, createDado, updateDado, deleteDado } from "../controller/controller.js";

const rota = Router();

rota.get('/dados', getAllDados);     
rota.post('/dados', createDado);     
rota.put('/dados/:id', updateDado);  
rota.delete('/dados/:id', deleteDado); 

export default rota;
