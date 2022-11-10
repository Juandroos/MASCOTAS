const mongoose = require('mongoose');

var esquema = new mongoose.Schema({
          nombre:              {type: String, required: true},
          edad:                {type: String, required: true},
          raza:                {type: String, required: true},
          sexo:                {type: String, required: true},
          descripcion:         {type: String, required: true},
          imagen:              {type: String},
          fechaActualizacion:  {type: Date}
});

module.exports = mongoose.model('mascotas', esquema);