const mongoose = require('mongoose');

var esquema = new mongoose.Schema({
          titulo: {type: String, required: true},
          resumen: {type: String, required: true},
          direccion: {type: String, required: true},
          descripcion: {type: String, required: true},
          fecha: {type: String, required: true},
          celular: {type: String, required: true},
          organizador: {type: String, required: true},
          correoElectronico: {type: String, required: true},
          beneficio: {type: String, required: true},
          fechaActualizacion:  {type: Date, default: Date.now}
});

module.exports = mongoose.model('actividades', esquema);