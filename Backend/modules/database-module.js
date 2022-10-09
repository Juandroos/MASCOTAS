const mongoose = require('mongoose');
//const {MongoClient} = require('mongodb');
//const client = new MongoClient('mongodb+srv://alfonsosevilla_25:admin@pnuevohogar.0tfb0s2.mongodb.net/?retryWrites=true&w=majority');

let bd = 'Nuevo_Hogar';
let puerto = '27017';
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${puerto}/${bd}`)
        .then(resultado=>console.log('Se conectó a Mongodb'))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();