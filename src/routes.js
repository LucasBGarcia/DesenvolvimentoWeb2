const express = require('express');
const ProdutoController = require('./controller/ProdutoController')
const UserController = require('./controller/UserController')
const InventoryController = require('./controller/InventoryController')
const login = require("./middleware/login")

const routes = express('routes');

routes.get('/', login, ProdutoController.index)
routes.post('/', ProdutoController.create)
routes.get('/busca/:id', ProdutoController.buscarPorId)
routes.delete('/deleta/:id', ProdutoController.delete)
routes.put('/atualiza/:id', ProdutoController.atualiza)

routes.get('/inventory', login, InventoryController.index)
routes.post('/inventory', InventoryController.create)
routes.get('/inventory/busca/:id', InventoryController.buscarPorId)
routes.delete('/inventory/deleta/:id', InventoryController.delete)
routes.put('/inventory/atualiza/:id', InventoryController.atualiza)

routes.get('/users', UserController.index);
routes.post('/login', UserController.login);
routes.post('/users', UserController.create);


module.exports = routes