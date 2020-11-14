import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar--custom navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse maintenance__message container justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item text-small">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item text-small">
                        <NavLink to="/products" className="nav-link">Nuestros Productos</NavLink>
                    </li>
                    <li className="nav-item text-small">
                        <NavLink to="/about" className="nav-link">Sobre Nosotros</NavLink>
                    </li>
                    <li className="nav-item text-small">
                        <NavLink to="/contact" className="nav-link">Contáctanos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;