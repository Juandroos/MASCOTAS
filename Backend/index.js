const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./modules/database-module');
const clienteRouter = require('./routes/cliente-router');

const app = express();
puerto = 7777;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//Rutas
app.use('/cliente', clienteRouter);



// app.get('/', function(req, res){
//     res.send('Aquí corresponde al landing page');
// });



app.listen(puerto, ()=>{
    console.log(`Servidor Backend del Centro de Adopción Nuevo Hogar escuchando al puerto:${puerto}. Abra el navegador en: http://localhost:${puerto}/`);
});