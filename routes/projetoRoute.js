const express = require('express'); 

const router = express.Router(); 

const projetoContrller = require('../controllers/projeto')

router.get('/', (req, res) => {
    projetoContrller.getAll(req, res)
}); 

router.get('/:id', (req, res) => {
    projetoContrller.get(req, res)
})

router.post('/', (req, res) => { 
    projetoContrller.create(req, res)
});

router.put('/:id', (req, res) => {
    projetoContrller.update(req, res)
});

router.delete('/:id', (req, res) =>{
    projetoContrller.delete(req, res)
});

module.exports = router;



