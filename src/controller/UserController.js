const User = require('../models/User')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {

    async index(req, res) {
        try {
            const users = await User.find({})

            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    delete(req, res) {
        const id = req.params.id;
        User.findByIdAndDelete(id, (err, ProdutoDeletado) => {

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
        const _name = req.body

        User.findByIdAndUpdate(id, _name, (err, ProdutoAtualizado) => {

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
        const { name, password } = req.body

        try {
            const hash = bcrypt.hashSync(password, 10);
            const newProduct = User.create({ name, password: hash })
            return res.status(200).json(newProduct);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async login(req, res) {
        // faz a desestruturação do objeto req.body
        const { name, password } = req.body;

        // validação para os campos
        if (!name || !password) {
            //      res.status(400).json({ erro: "Enviar email, senha do usuário" });
            res.status(400).json({ erro: "Login ou senha incorretos" });
            return;
        }
        // verifica se o e-mail já está cadastrado
        try {

            const dados = await User.findOne({ name });

            if (!dados) {
                res.status(400).json({ erro: "Login ou senha incorretos" });
                return;
            }

            if (bcrypt.compareSync(password, dados.password)) {

                const token = jwt.sign({
                    usuario_id: dados.id,
                    usuario_name: dados.name
                }, process.env.JWT_KEY,
                    {
                        expiresIn: "8h"
                    }
                )

                res.status(200).json({ name: dados.name, token });
            } else {
                //res.status(400).json({ erro: "Senha Incorreta" });
                res.status(400).json({ erro: "Login ou senha incorretos" });
            }
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },
}

