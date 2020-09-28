import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
            <a className="navbar-brand " href="/">Usuarios</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}
