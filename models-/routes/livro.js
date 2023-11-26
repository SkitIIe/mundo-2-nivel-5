// routes/livros.js

const express = require('express');
const router = express.Router();
const livroDAO = require('../modelo/livro-dao');

// Rota para obter todos os livros (GET)
router.get('/', async (req, res) => {
  try {
    const livros = await livroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros' });
  }
});

// Rota para incluir um novo livro (POST)
router.post('/', async (req, res) => {
  const livro = req.body;

  try {
    const novoLivro = await livroDAO.incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro' });
  }
});

// Rota para excluir um livro pelo código (DELETE)
router.delete('/:_id', async (req, res) => {
  const codigoLivro = req.params._id;

  try {
    const resultado = await livroDAO.excluir(codigoLivro);
    if (resultado.deletedCount > 0) {
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro' });
  }
});

module.exports = router;