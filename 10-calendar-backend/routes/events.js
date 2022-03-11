/*
    Rutas de Usuarios / Events
    host + /api/events

*/

const { Router } = require("express");
const { checkSchema, check } = require("express-validator");
const { getEventos, crearEvento, actualizaEvento, eliminarEvento } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();



//Todas tienen que pasar por la validacion token
router.use(validarJWT)

//Obtener eventos
router.get('/', getEventos)

//Crear Evento
router.post('/',
[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha inicio es obligatorio').custom(isDate),
    check('end', 'Fecha finalizacion es obligatorio').custom(isDate),
    validarCampos
]
, crearEvento);


//Actualizar Evento
router.put('/:id', 
[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha inicio es obligatorio').custom(isDate),
    check('end', 'Fecha finalizacion es obligatorio').custom(isDate),
    validarCampos
]
,actualizaEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);


module.exports =  router
