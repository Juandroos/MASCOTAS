const mongoose = require('mongoose');

var esquema = new mongoose.Schema({
        nombre:                 {type: String, required: true},
        identidad:              {type: String, required: true},
        direccion:              {type: String, required: true},
        sexo:                   {type: String, required: true},
        fechaNacimiento:        {type: String, required: true},
        celular:                {type: String, required: true},
        telefono:               {type: String, required: true},
        correo:                 {type: String, required: true, unique: true},
        contrasenia:            {type: String,required: true},
        fotoPerfil:             {type: String},
        creacion:               {type: Date, default: Date.now},
        modificacion:           {type: Date, default: Date.now}
});

module.exports = mongoose.model('clientes', esquema);