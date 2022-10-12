const express = require('express');
const cliente = require('../models/cliente');
const router = express.Router();



//POST - Register cliente
router.post('/register', (req, res)=>{
    let user= new cliente(
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
        res.send({mensaje:'registro guardado', cliente: user});
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
    
})


//POST - Login cliente
router.post('/login', async (req, res) => {
    const { correo, contrasenia } = req.body;                                                               // Obteniendo datos del body
    const user = await cliente.findOne({correo})                                                           // Buscando usuario en la base de datos
    if(!user) return res.status(401).send('Usuario no encontrado');
    if(user.contrasenia !== contrasenia) return res.status(401).send('Contraseña incorrecta');
    return res.status(200).json(user);
});


//GET - Obtener todos los clientes
router.get('/', async (req, res) =>{
    const clientes = await cliente.find();
    res.send(clientes);
})

//
module.exports = router;