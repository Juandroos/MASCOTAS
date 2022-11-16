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

                titulo: req.body.titulo,
                resumen: req.body.resumen,
                direccion: req.body.direccion,
                descripcion: req.body.descripcion,
                fecha: req.body.fecha,
                celular: req.body.celular,
                organizador: req.body.organizador,
                correoElectronico: req.body.correoElectronico,
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

//GET Obtener una actividad  
router.get('/informacionActividad/:id', async (req, res) =>{
    await actividad.find({_id: req.params.id}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })

})

//PUT - Actualizar informacion actividad
router.put('/editarInfoActividad/:id', async (req, res) =>{
    await actividad.updateOne({
        _id: req.params.id
    },
    {   titulo: req.body.titulo,
        resumen: req.body.resumen,
        direccion: req.body.direccion,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        celular: req.body.celular,
        organizador: req.body.organizador,
        correoElectronico: req.body.correoElectronico,
        beneficio: req.body.beneficio,
        fechaActualizacion: new Date()
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})
  
  module.exports = router;
     