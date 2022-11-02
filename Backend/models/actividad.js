const mongoose = require('mongoose');

var esquema = new mongoose.Schema({
          tituloevento:         {type: String, required: true},
          resumen:              {type: String, required: true},
          direccion:            {type: String, required: true},
          descripcion:          {type: String, required: true},
          fechaevento:          {type: String, required: true},
          telefono:             {type: String, required: true},
          organizador:          {type: String, required: true},
          correoelectronico:    {type: String, required: true},
          beneficio:            {type: String, required: true}
});

module.exports = mongoose.model('actividades', esquema);