'use strict'

const { Model, DataTypes } = require('sequelize'); 

module.exports = (sequelize, DataTypes) => { 
    class Departamento extends Model { }  

    Departamento.init({ 
        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        nome: DataTypes.STRING(50),
        sigla: DataTypes.STRING(10),
        responsavel: DataTypes.STRING(50)
    },
        {
            sequelize, 
            modelName: 'departamento', 
            timestamps: false 
        });

    return Departamento
};