const express = require('express');
const cliente = require('../models/cliente');
const correoModule = require('../modules/correo-module');
const router = express.Router();



//POST - Register cliente
router.post('/register', (req, res)=>{
    let user= new cliente(
        {
            nombre: req.body.nombre,
            identidad: req.body.identidad,
            direccion: req.body.direccion,
            sexo: req.body.sexo,
            fechaNacimiento: {
                dia: req.body.dia,
                mes: req.body.mes,
                anio: req.body.anio},
            celular: req.body.celular,
            telefono: req.body.telefono,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            
        }
    );
// Funcion Enviar correo
    correoModule.enviarCorreo(req.body.correo, req.body.nombre); 
    
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

//GET - Cambio de contraseña
router.put('/changePassword', async (req, res) =>{
    const {correo, contrasenia} = req.body;
    const user = await cliente.findOne({correo})
    if(!user) return res.status(401).send('Correo incorrecto');
    const clienteNuevo = {
        contrasenia: contrasenia,
    }
    await Cliente.findByIdAndUpdate(req.params,correo, clienteNuevo, {useFindAndModify: false});
    res.json({
        status: 'contraseña actualizada'
    });
    return res.status(200).json(user);
})
module.exports = router;