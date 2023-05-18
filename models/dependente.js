'use strict'

const { Model, DataTypes } = require('sequelize'); 

module.exports = (sequelize, DataTypes) => { 
    class Dependente extends Model { }  

    Dependente.init({ 
        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        nome: DataTypes.STRING(50),
        idade: DataTypes.TINYINT,
        tipo: DataTypes.STRING(20),
        status_dep: DataTypes.STRING(20),
        id_funcionario: DataTypes.BIGINT
    },
        {
            sequelize, 
            modelName: 'dependente', 
            timestamps: false 
        });

    return Dependente
}