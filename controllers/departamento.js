const Sequelize = require('sequelize'); 
const sequelize = require('../db/db');
const Departamento = require('../models/departamento');

module.exports = { 
    async getAll(req, res) {
        const departamento = await Departamento(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(departamento)
    },
    async get(req, res) {
        const departamento = await Departamento(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(departamento)
    },
    async create(req, res) {
        const departamento = await Departamento(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            sigla: req.body.sigla,
            responsavel: req.body.responsavel
        })

        res.status(201).send({
            message: "Departamento cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const departamento = await Departamento(sequelize, Sequelize.DataTypes).update({
            nome: req.body.nome,
            sigla: req.body.sigla,
            responsavel: req.body.responsavel
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Departamento atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Departamento(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Departamento excluído com sucesso.')
        })
    }
};