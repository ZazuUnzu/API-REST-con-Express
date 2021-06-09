const { Router } = require('express');
const personaCtrl = require('../controllers/personas.controller');
const router = Router();

const personasCtrl = require('../controllers/personas.controller');



//CRUD --> CREATE, READ, UPDATE, DELETE

router.get('/', personasCtrl.getPersonas);

router.post('/', personasCtrl.createPersona);

router.get('/:id', personaCtrl.getPersona);

router.put('/:id', personaCtrl.updatePersona);

router.delete('/:id', personaCtrl.deletePersona);

module.exports = router