/*
Aqui definimos qué tiene que hacer nuestra app con las peticiones,
lo que es el CRUD.
*/
const personaCtrl = {}

const Persona = require('../models/Persona')

//Función para obtener toda la lista de personas
personaCtrl.getPersonas = async (req, res) => {
    const personas = await Persona.find()
    res.json(personas)
    console.log(personas)
}
//Función para obtener una sola persona, por su ID
personaCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id)
    res.send(persona);    
}
// Función para crear una persona en la agenda, con manejo de errores
personaCtrl.createPersona = async(req, res, err) => {
    const nuevaPersona = new Persona(req.body)

    try {
        await nuevaPersona.save();
        console.log(nuevaPersona)
        res.send({message: 'Persona creada con éxito.'})
    }

    catch(err) {
        console.log(err.message)
        res.send('Error de validación.: '+'\n'+(err))
    }

}


//Función para actualizar una persona de la agenda, por su ID
personaCtrl.updatePersona = async (req, res, err) => {

    try {
        await Persona.findByIdAndUpdate(req.params.id, req.body)
        res.send('Persona actualizada')  
    }

    catch(err) {
        console.log(err.message)
        res.send('Error de validación.: '+'\n'+(err))
    }
}


//Función para eliminar una persona asociada a su ID
personaCtrl.deletePersona = async (req, res) => {
    await Persona.findByIdAndDelete(req.params.id)
    res.send('Persona eliminada') 
}


module.exports = personaCtrl;