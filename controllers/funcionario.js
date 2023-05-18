const Sequelize = require('sequelize'); 
const sequelize = require('../db/db');
const Funcionario = require('../models/funcionario');

module.exports = { 
    async getAll(req, res) {
        const funcionario = await Funcionario(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(funcionario)
    },
    async get(req, res) {
        const funcionario = await Funcionario(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(funcionario)
    },
    async create(req, res) {
        const funcionario = await Funcionario(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            cargo: req.body.cargo,
            salario: req.body.salario,
            id_departamento: req.body.id_departamento
        })

        res.status(201).send({
            message: "Funcionario cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const funcionario = await Funcionario(sequelize, Sequelize.DataTypes).update({
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            cargo: req.body.cargo,
            salario: req.body.salario,
            id_departamento: req.body.id_departamento
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Funcionario atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Funcionario(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Funcionario excluído com sucesso.')
        })
    }
};