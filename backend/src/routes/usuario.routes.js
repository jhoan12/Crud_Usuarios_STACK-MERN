const {Router} = require('express')
const route = Router()
const UsuariosCtrl = require('../controllers/usuarios.controllers')

route.post('/crear', UsuariosCtrl.agregarUsuario)
route.get('/obtener', UsuariosCtrl.obtenerUsuarios)
route.get('/obtenerUsuario/:id', UsuariosCtrl.obtenerUsuario)
route.put('/actualizar/:id', UsuariosCtrl.actualizarUsuario)
route.delete('/eliminar/:id', UsuariosCtrl.eliminarUsuario)

module.exports = route