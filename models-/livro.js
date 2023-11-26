const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  anoPublicacao: Number
});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;