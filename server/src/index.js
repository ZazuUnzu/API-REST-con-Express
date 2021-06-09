require('./database')
const app = require('./app')


app.listen(app.get('port')); //Llamamos a la variable "port" que hemos creado en app.js
console.log(`Server on port ${app.get('port')}`)