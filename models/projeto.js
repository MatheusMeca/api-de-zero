'use strict'

const { Model, DataTypes } = require('sequelize'); 

module.exports = (sequelize, DataTypes) => { 
    class Projeto extends Model { }  

    Projeto.init({ 
        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        nome_projeto: DataTypes.STRING(50),
        tipo_projeto: DataTypes.STRING(25),
        custo: DataTypes.DECIMAL(10.0)
    },
        {
            sequelize, 
            modelName: 'projeto', 
            timestamps: false 
        });

    return Projeto
};