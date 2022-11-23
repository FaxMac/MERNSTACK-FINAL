const mongoose = require('mongoose');
const {Schema} = mongoose;

//MODELO DE CLIENTE
const ClientSchema = new Schema({
    nombre: {type: String, require: true},
    correo: {type: String, require: true, unique:true},
    telefono: {type: String, require: true },
    direccion: {type: String, require: true},
    contrasena: {type: String, require: true },
});

const Clients = mongoose.model('Client', ClientSchema);
module.exports = Clients