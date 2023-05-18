const express = require('express'); 

const router = express.Router(); 

const depentController = require('../controllers/dependente')

router.get('/', (req, res) => {
    depentController.getAll(req, res)
}); 

router.get('/:id', (req, res) => {
    depentController.get(req, res)
})

router.post('/', (req, res) => { 
    depentController.create(req, res)
});

router.put('/:id', (req, res) => {
    depentController.update(req, res)
});

router.delete('/:id', (req, res) =>{
    depentController.delete(req, res)
});

module.exports = router;



