const express = require('express');
require('dotenv').config();


//Crear el servidor de expres

const app = express();

//Directorio publico
app.use(express.static('public'));

//rutas
/* app.get('/', (req, res) => {
    
    res.json({
        ok:true
    })
}) */

//Escuchar peticiones

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
})