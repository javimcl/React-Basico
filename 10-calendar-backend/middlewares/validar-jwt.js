const {response} = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = (req, res = response, next) => {

    //x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        })
    }

    try {
        
    } catch (error) {
        
    }

    next();

}

module.exports = {
    validarJWT
}