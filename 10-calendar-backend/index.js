const express = require('express');
const bodyParser = require('body-parser');
const { dbConnection } = require('./database/config');
require('dotenv').config();


//Crear el servidor de expres

const app = express();

//Base de datos
dbConnection();

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(bodyParser.json());

//rutas
/* app.get('/', (req, res) => {
    
    res.json({
        ok:true
    })
}) */

// auth crear, login renew
app.use('/api/auth', require('./routes/auth'));

//CRUD: Eventos





//Escuchar peticiones

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
})