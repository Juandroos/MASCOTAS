const express = require('express');
const mascota = require('../models/mascota');
const router = express.Router();



//GET - Obtener todos las Mascotas
router.get('/', async (req, res) =>{
     const pets = await mascota.find();
     res.send(pets);
})

// POST Agregar Nueva Mascota
router.post('/agregar', (req, res)=>{
     let pet= new mascota(
          {
               nombre:        req.body.nombre,
               edad:          req.body.edad,
               raza:          req.body.raza,
               sexo:          req.body.sexo,
               descripcion:   req.body.descripcion, 
               imagen:        req.body.imagen, 
          }
     );
     pet.save().then(resultado=>{
          res.send({mensaje:'Mascota Agregada con exito', mascota: pet});
          res.end();     
     }).catch(error=>{
          res.send(error);
          res.end();
     })
})

//PUT - Actualizar informacion cliente
router.put('/actualizar/:id', async (req, res) =>{
     await mascota.updateOne({
          _id: req.params.id
     },
     {    nombre: req.body.nombre,
          edad: req.body.edad,
          raza: req.body.raza,
          sexo: req.body.sexo,
          descripcion: req.body.descripcion,
          imagen: req.body.imagen,
          fechaActualizacion: new Date()
     }).then(result=>{
          res.send({mensaje:'Mascota Actualizada con exito'});
          res.end();
     }).catch(error=>{
          res.send(error);
          res.end();
     })
})


module.exports = router;