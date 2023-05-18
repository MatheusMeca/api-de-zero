const express = require('express'); 

const router = express.Router(); 

const departContrller = require('../controllers/departamento')

router.get('/', (req, res) => {
    departContrller.getAll(req, res)
}); 

router.get('/:id', (req, res) => {
    departContrller.get(req, res)
})

router.post('/', (req, res) => { 
    departContrller.create(req, res)
});

router.put('/:id', (req, res) => {
    departContrller.update(req, res)
});

router.delete('/:id', (req, res) =>{
    departContrller.delete(req, res)
});

module.exports = router;



