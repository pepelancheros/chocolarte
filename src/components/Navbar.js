import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar--custom navbar-expand-md navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-item nav-link text-small">Inicio</NavLink>
                    <NavLink to="/products" className="nav-item nav-link text-small">Productos</NavLink>
                    <NavLink to="/about" className="nav-item nav-link text-small">Nosotros</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link text-small">Contáctanos</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;