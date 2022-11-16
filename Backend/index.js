const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./modules/database-module');

const clienteRouter = require('./routes/cliente-router');
const mascotaRouter = require('./routes/mascota-router');
const actividadRouter = require('./routes/actividad-router');

require('dotenv').config();
const app = express();

app.set('puerto', process.env.PORT || 7777);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended:true}));


//Rutas
app.use('/cliente', clienteRouter);
app.use('/mascota', mascotaRouter);
app.use('/actividad', actividadRouter);   

app.listen(app.get('puerto'), ()=>{
    console.log(`Servidor Backend del Centro de Adopción Nuevo Hogar escuchando al puerto:${app.get('puerto')}. Abra el navegador en: http://localhost:${app.get('puerto')}/`);
});