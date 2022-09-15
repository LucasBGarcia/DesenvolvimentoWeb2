const express = require('express');
const ProdutoController = require('./controller/ProdutoController')
const UserController = require('./controller/UserController')
const login = require("./middleware/login")

const routes = express('routes');

routes.get('/', login, ProdutoController.index)
routes.post('/', ProdutoController.create)
routes.get('/busca/:id', ProdutoController.buscarPorId)
routes.delete('/deleta/:id', ProdutoController.delete)
routes.put('/atualiza/:id', ProdutoController.atualiza)

routes.get('/users', UserController.index);
routes.post('/login', UserController.login);
routes.post('/users', UserController.create);


module.exports = routes