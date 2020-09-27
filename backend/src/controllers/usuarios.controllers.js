const UsuariosCtrl = {}
const Usuario = require('../models/usuarios.models')

UsuariosCtrl.agregarUsuario = async (req, res) => {
    const {nombre, correo, apellido} = req.body
    const nuevoUsuario = new Usuario({
        nombre,
        correo,
        apellido
    })
    const respuesta = await nuevoUsuario.save()
    res.json({
        mensaje: 'Usuario Creado',
        respuesta
    })
}

UsuariosCtrl.obtenerUsuarios = async (req, res) => {
    const respuesta = await Usuario.find()
    res.json(respuesta)
}

UsuariosCtrl.obtenerUsuario = async (req, res) => {
    const id = req.params.id
    const respuesta = await Usuario.findById({_id: id})
    res.json(respuesta)
}

UsuariosCtrl.actualizarUsuario = async (req, res) => {
    const id  = req.params.id
    const respuesta = await Usuario.findByIdAndUpdate({_id: id}, req.body)
    res.json({
        mensaje: 'Usuario Actualizado',
        respuesta
    })
}

UsuariosCtrl.eliminarUsuario = async (req, res) => {
    const id = req.params.id
    const respuesta = await Usuario.findByIdAndDelete({_id: id})
    res.json({
        mensaje: 'Usuario Eliminado',
        respuesta
    })
}

module.exports = UsuariosCtrl