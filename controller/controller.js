import { db } from "../firebase.js";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const collectionRef = collection(db, "usuarios");

export const getAllDados = async (req, res) => {
  try {
    const snapshot = await getDocs(collectionRef);
    const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(dados);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};

export const createDado = async (req, res) => {
  try {
    const novo = req.body;
    const docRef = await addDoc(collectionRef, novo);
    res.status(201).json({ id: docRef.id, ...novo });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar dado", error });
  }
};

export const updateDado = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const ref = doc(db, "usuarios", id);

    await updateDoc(ref, dadosAtualizados);
    res.json({ id, ...dadosAtualizados });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar dado", error });
  }
};

export const deleteDado = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteDoc(doc(db, "usuarios", id));
    res.json({ message: "Dado removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir dado", error });
  }
};
