const { response } = require('express')
const Evento = require('../models/Evento')

const getEventos = async (req, res = response) => {
    const eventos = await Evento.find()
        .populate('user', 'name');

    res.status(201).json(
        {
            ok: true,
            eventos
        })
}

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body);
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        res.status(201).json(
            {
                ok: true,
                evento: eventoGuardado
            })

    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                ok: false,
                msg: 'Hable con el administrador'
            })
    }


}

const actualizaEvento = async (req, res = response) => {

    const eventoId = req.params.id;

    try {
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(400).json({
                ok: false,
                msg: 'Evento no existe con el id'
            });
        }

        if (evento.user.toString() !== req.uid) {
            return res.status(401).json(
                {
                    ok: true,
                    msg: 'No tiene privilegio para eliminar este evento'
                })
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        res.status(201).json({
            ok: true,
            evento: eventoActualizado
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'HABLE CON EL ADMINISTRADOR'
        });

    }




}

const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;

    try {
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(400).json({
                ok: false,
                msg: 'Evento no existe con el id'
            });
        }

        if (evento.user.toString() !== req.uid) {
            return res.status(401).json(
                {
                    ok: true,
                    msg: 'No tiene privilegio de editar este evento'
                })
        }



        await Evento.findByIdAndDelete(eventoId);

        res.status(201).json({
            ok: true,
            evento: eventoId
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'HABLE CON EL ADMINISTRADOR'
        });

    }

}

module.exports = {
    getEventos,
    crearEvento,
    actualizaEvento,
    eliminarEvento
}