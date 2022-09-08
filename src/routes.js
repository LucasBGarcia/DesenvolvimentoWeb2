const { Router } = require('express')
const ProdutoController = require('./controller/ProdutoController')

const router = Router()

router.get('/', ProdutoController.index)
router.post('/', ProdutoController.create)
router.get('/busca/:id', ProdutoController.buscarPorId)
router.delete('/deleta/:id', ProdutoController.delete)
router.put('/atualiza/:id', ProdutoController.atualiza)

module.exports = router