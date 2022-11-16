const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoleSchema = new Schema({
        roleId:{
        type:String,
        unique:true,
        required:[true,"Id del Rol es requerido"]
        },
        tipo:{
        type:String,
        unique:true,
        required:[true,"Tipo de Rol es requerido"]
        },
        rights:[{
        name: String,
        path: String,
        url: String
        }]
});

module.exports = Role = mongoose.model('role', RoleSchema);