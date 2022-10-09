const express = require('express');
const usuario = require('../models/usuario');
const router = express.Router();

router.post('/', (req, res)=>{
    let user= new usuario(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: {
                dia: req.body.dia,
                mes: req.body.mes,
                anio: req.body.anio},
            telefono: req.body.telefono,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            direccion: req.body.direccion
        }
    ); 
    user.save().then(resultado=>{
        res.send({mensaje:'registro guardado', usuario: user});
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
    
})

module.exports = router;