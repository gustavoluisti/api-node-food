const express = require('express');
const bodyParser = require('body-parser');

//routers
const categoriaRouter = require('../routes/categoria-router');

//Criando/ Invocando a Api do Express
const app = express();

//Configuração de parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);

//Exportando Api
module.exports = app;