const Product = require('../models/Product')
const Inventory = require('../models/Inventory')

module.exports = {
    async index(req, res) {
        try {
            const inventory = await Inventory.find({})
            //.populate("productId", "productName")

            return res.status(200).json(inventory);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    buscarPorId(req, res) {
        const id = req.params.id;
        Inventory.findById(id, (err, produtoEncontrado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (produtoEncontrado) {
                return res.json(produtoEncontrado);
            }
            else {
                return res.json(produtoEncontrado);
                // return res.status(404).json(
                //     { Erro: "Produto nao encontrado" }
                // )
            }
        })
    },
    delete(req, res) {
        const id = req.params.id;
        Inventory.findByIdAndDelete(id, (err, ProdutoDeletado) => {

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
        const _amount = req.body

        Inventory.findByIdAndUpdate(id, _amount, (err, ProdutoAtualizado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (ProdutoAtualizado) {
                console.log(_amount)
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
        const { amount, productId } = req.body
        try {
            const newInvetory = Inventory.create({ amount, productId })
            return res.status(201).json(newInvetory);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    async createWithId(req, res) {
        const id = req.params.id;
        const { amount } = req.body
        try {
            const newInvetory = Inventory.create({ amount, productId: id })
            return res.status(201).json(newInvetory);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }


}

