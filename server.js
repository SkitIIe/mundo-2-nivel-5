const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const livrosRouter = require('./routes/livros');
app.use('/livros', livrosRouter);

const app = express();

// Conectar ao MongoDB
mongoose.connect('mondodb://localhost/livraria', { useNewUrlParser: true, useUnifiedTopology: true });

// Configurar o CORS
app.use(cors());

// Restante do código gerado pelo Express

module.exports = app;
