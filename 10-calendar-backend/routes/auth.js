/*
    Rutas de Usuarios / Auth
    host + /api/auth

*/

const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();

const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');

router.post(
    '/new', 
    [ //middleware
        check('name', 'El nombre es obligatorio').not().isEmpty()
    ]
     ,
    crearUsuario);

router.post('/',loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router