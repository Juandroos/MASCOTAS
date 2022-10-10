const mongoose = require('mongoose');
const URL = 'mongodb+srv://hjiovanny1:admin@pnuevohogar.0tfb0s2.mongodb.net/pnuevohogar?retryWrites=true&w=majority';

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(resultado=>console.log('Se conectó a Mongodb Atlas'))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();