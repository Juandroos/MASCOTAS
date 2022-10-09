const mongoose = require('mongoose');

var esquema = new mongoose.Schema({
        nombre: String,
        apellido: String,
        fechaNacimiento: mongoose.SchemaTypes.Mixed,
        correo: String,
        telefono: String,
        contrasenia: String,
        direccion: String
});

module.exports = mongoose.model('usuarios', esquema);