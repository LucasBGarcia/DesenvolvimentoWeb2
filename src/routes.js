const { Router } = require('express')
const ProdutoController = require('./controller/ProdutoController')

const router = Router()

router.get('/', ProdutoController.index)

module.exports = router