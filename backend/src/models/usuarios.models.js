const mongoose = require('mongoose')
const {Schema} = mongoose

const UsuariosSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String
})

module.exports = mongoose.model('Usuario', UsuariosSchema)