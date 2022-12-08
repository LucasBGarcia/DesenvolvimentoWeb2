const Product = require('../models/Product')

module.exports = {
    async index(req, res) {
        try {
            const products = await Product.find()

            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    buscarPorId(req, res) {
        const id = req.params.id;
        Product.findById(id, (err, produtoEncontrado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (produtoEncontrado) {
                return res.json(produtoEncontrado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },
    delete(req, res) {
        const id = req.params.id;
        Product.findByIdAndDelete(id, (err, ProdutoDeletado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (ProdutoDeletado) {
                return res.json(ProdutoDeletado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },
    atualiza(req, res) {
        const id = req.params.id;
        const _productDescription = req.body
        const _productName = req.body

        Product.findByIdAndUpdate(id, _productName, _productDescription, (err, ProdutoAtualizado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (ProdutoAtualizado) {
                return res.json(ProdutoAtualizado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },

    async create(req, res) {
        const { productName, productDescription } = req.body
        try {
            const newProduct = Product.create({ productName, productDescription })
            return res.status(201).json(newProduct);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
}

