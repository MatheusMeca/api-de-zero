const express = require('express'); 

const app = express(); 

const departRoute = require('./routes/departRoute') 
const depenRoute = require('./routes/depenRoute')
const funcioRoute = require('./routes/funcioRoute')

app.use(express.json()) 

app.use(express.urlencoded({extended: false}))

app.use('/departamentos', departRoute);
app.use('/dependentes', depenRoute);
app.use('/funcionarios', funcioRoute);

//Tratamento de Erros 

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.') 
    erro.status = 404; 
    next(erro)
});

app.use((error, req, res, next) => { 
    res.status(error.status || 500); 
    return res.send({
        erro: { 
            message: error.message
        }
    })
});

module.exports = app; 
