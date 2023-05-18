'use strict'

const { Model, DataTypes } = require('sequelize'); 

module.exports = (sequelize, DataTypes) => { 
    class Funcionario extends Model { }  

    Funcionario.init({ 
        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        nome: DataTypes.STRING(50),
        endereco: DataTypes.STRING(100),
        telefone: DataTypes.BIGINT,
        cargo: DataTypes.STRING(50),
        salario: DataTypes.DECIMAL(10.0),
        id_departamento: DataTypes.BIGINT
    },
        {
            sequelize, 
            modelName: 'funcionario', 
            timestamps: false 
        });

    return Funcionario
}