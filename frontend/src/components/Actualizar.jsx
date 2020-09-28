import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'

export default function Actualizar(props) {
 
    const [nombre, setMombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')

    useEffect(()=>{
        const id = props.match.params.id
        usuario(id)
    },[props.match.params.id])

    const usuario = async (id) => {
        const respuesta = await Axios.get('http://localhost:4000/usuarios/obtenerUsuario/'+id)
        setMombre(respuesta.data.nombre)
        setApellido(respuesta.data.apellido)
        setCorreo(respuesta.data.correo)
    }

    const actualizar = async (e) => {
            e.preventDefault()
        if(nombre.trim() === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Olvidaste llenar el campo NOMBRE'
            })
            return
        }else if(apellido.trim() === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Olvidaste llenar el campo APELLIDO'
            })
            return
        }else if(correo.trim() === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Olvidaste llenar el campo CORREO'
            })
            return
        }
        const id = props.match.params.id
        const usuario = {
            nombre,
            apellido,
            correo
        }
         await Axios.put('http://localhost:4000/usuarios/actualizar/'+id, usuario)
      
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Actualizado',
            showConfirmButton: false,
            timer: 1400
          })
        setTimeout(()=>{
            window.location.href="/"
        },1350)
    }
    return (
        <div className="container-lg text-center">
            <div className="col-md-8 pt-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        
                            <h1>Editar Usuario</h1>
                        
                    </div>
                    <div className="card-body">
                        <form onSubmit={actualizar} >
                            <div className="form-group">
                                <input type="text" placeholder="Nombre" className="form-control mt-3" value={nombre} onChange={e => setMombre(e.target.value)} />
                                <input type="text" placeholder="Apellido" className="form-control mt-3" value={apellido} onChange={e => setApellido(e.target.value)} />
                                <input type="email" placeholder="Correo" className="form-control mt-3" value={correo} onChange={e => setCorreo(e.target.value)} />
                            </div>
                                    <button type="submit" className="btn btn-dark" >Actualizar</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
