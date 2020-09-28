import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'


export default function Usuarios() {

    const [datos, setDatos] = useState([])

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const respuesta = await Axios.get('http://localhost:4000/usuarios/obtener')
        setDatos(respuesta.data)
    }

    const agregarUsuario = async (e) => {
        e.preventDefault()
        const nuevoUsuario = {
            nombre,
            apellido,
            correo
        }
        const respuesta = await Axios.post('http://localhost:4000/usuarios/crear', nuevoUsuario)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: respuesta.data.mensaje,
            showConfirmButton: false,
            timer: 1400
        })
        setTimeout(() => {
            window.location.href = "/"
        }, 1450)
    }

    const eliminar = async (id) => {
        const respuesta = await Axios.delete('http://localhost:4000/usuarios/eliminar/' + id)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: respuesta.data.mensaje,
            showConfirmButton: false,
            timer: 1400
        })
        setTimeout(() => {
            obtenerDatos()
        }, 1450)
    }

    return (
        <div className="container-lg mt-2">
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-dark btn-block mb-1" data-toggle="modal" data-target="#addUsuario">Agregar Usuario</button>
                </div>
                <div className="col-12">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Correo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.map((dato, i) => (
                                    <tr key={dato._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{dato.nombre}</td>
                                        <td>{dato.apellido}</td>
                                        <td>{dato.correo}</td>
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={"/actualizar/"+dato._id}>Editar</Link>
                                            <button className="btn btn-danger" onClick={() => eliminar(dato._id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="modal fade" id="addUsuario" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar Usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={agregarUsuario}>
                                <div className="form-group">
                                    <label >Nombre</label>
                                    <input type="text" className="form-control" onChange={e => setNombre(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label >Apellidos</label>
                                    <input type="text" className="form-control" onChange={e => setApellido(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" onChange={e => setCorreo(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-dark btn-block">Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
