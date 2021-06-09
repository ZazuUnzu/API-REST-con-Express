const express = require('express')
const morgan = require('morgan')

const app = express()

//Definimos una variable para el puerto, estableciéndola en (por ejemplo) 4000
//Si no hay una variable ya definida (process.env.PORT). Esto son "environment variables"
app.set('port', process.env.PORT ||  4000);

app.use(morgan('dev'))
app.use(express.json())//Middleware para que mi app entienda objetos JSON
app.use(express.urlencoded({extended: false}))//Para que pueda entender los datos que vengan de un form HTML

//Pasamos una ruta "prefijo" como primer parámetro, y la ruta a la que se
//hace ref. como segundo parámetro.
app.use("/api/agenda", require('./routes/personas.routes'))

module.exports = app; 