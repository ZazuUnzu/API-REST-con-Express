const { Schema, model } = require('mongoose')

// const { check } = require('express-validator');


const personaSchema = new Schema ({
    //En Schema colocamos los 'built-in' validators de Mongoose. 
    //https://mongoosejs.com/docs/schematypes.html#string-validators
    nombre: {
        type: String, 
        required: true,
        minLength: [3, 'Mínimo 3 caracteres'],
        match: [/^[a-zA-Z\-]+$/, "Solo letras"]
    },
    apellidos: {
        type: String, 
        required: true,
        minLength: [3, 'Mínimo 3 caracteres'],
        match: [/^[a-zA-Z\-]+$/, "Solo letras"]
    },
    edad: {
        type: Number, 
        required: true,
        min: [0, 'Mínimo 0'],
        max: [125, "Máximo 125"]
    },
    dni: {
        type: String, 
        required: true,
        match: [/^[0-9\-]{8}[a-zA-Z\-]{1}/, "8 dígitos y 1 letra sin espacios"]
    },
    cumpleanos: {
        type: Date, 
        required: true,
    //Esta validación la ignora no sé por qué.
        match: [/^d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])/, "Fecha en formato aaaa/mm/dd" ]
    },
    colorFav: {
        type: String, 
        required: true,
        minLength: [3, 'Mínimo 3 caracteres'],
        match: [/^[a-zA-Z\-]+$/, "Solo letras"]
    },
    sexo: {
        type: String, 
        required: true,
        enum: {values:['Mujer', 'Hombre', 'No binario', 'No declarado'], message: '{VALUE} no es una opción válida. \n Solo se aceptan "Mujer", "Hombre", "No binario" y "No declarado"'}
    },
}, {
    versionKey: false //Para evitar que Mongo cree datos con _v , parece ser que es algo habitual.
});

module.exports = model('Persona', personaSchema);