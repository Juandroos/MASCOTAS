const express = require('express');
const roles = require('../models/roles');
const router = express.Router();


//GET - Obtener todos los roles
router.get('/', async (req, res) =>{
     const rols = await roles.find();
     res.send(rols);
})

// POST Agregar Nuevo Rol
router.post('/agregar', (req, res)=>{
     let rol= new roles(
          {
               roleId:        req.body.roleId,
               tipo:          req.body.type,
               name:          req.body.name,
               path:          req.body.path,
               url:           req.body.url, 
          }
     );
     rol.save().then(resultado=>{
          res.send({mensaje:'Rol Agregado con exito', roles: rol});
          res.end();     
     }).catch(error=>{
          res.send(error);
          res.end();
     })
})


module.exports = router;