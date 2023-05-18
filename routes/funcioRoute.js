const express = require('express'); 

const router = express.Router(); 

const funcionController = require('../controllers/funcionario')

router.get('/', (req, res) => {
    funcionController.getAll(req, res)
}); 

router.get('/:id', (req, res) => {
    funcionController.get(req, res)
})

router.post('/', (req, res) => { 
    funcionController.create(req, res)
});

router.put('/:id', (req, res) => {
    funcionController.update(req, res)
});

router.delete('/:id', (req, res) =>{
    funcionController.delete(req, res)
});

module.exports = router;



