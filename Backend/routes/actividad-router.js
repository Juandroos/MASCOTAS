const express = require('express');
const actividad = require('../models/actividad');
const router = express.Router();


//GET - Obtener todas las actividades
router.get('/', async (req, res) =>{
    const actividadess = await actividad.find();
    res.send(actividadess);
})

//POST - Nueva Actividad

router.post('/agregar', (req, res)=>{
    let activity= new actividad(
         {

                tituloevento: req.body.tituloevento,
                resumen: req.body.resumen,
                direccion: req.body.direccion,
                descripcion: req.body.descripcion,
                fechaevento: req.body.fechaevento,
                telefono: req.body.telefono,
                organizador: req.body.organizador,
                correoelectronico: req.body.correoelectronico,
                beneficio: req.body.beneficio     
            }
        );

        activity.save().then(resultado=>{
            res.send({mensaje:'Actividad Agregada con exito', actividad: activity});
            res.end();     
        }).catch(error=>{
            res.send(error);
            res.end();
        })
  })
  
  module.exports = router;
     