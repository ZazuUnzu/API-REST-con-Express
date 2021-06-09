const mongoose = require('mongoose')

//Defino el nombre de mi base de datos, en este caso "agenda-crud".
mongoose.connect('mongodb://localhost/agenda-crud', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
 })
.then(db => console.log('La base de datos está conectada'))
.catch(err => console.error(err));
