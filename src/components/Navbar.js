import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse maintenance__message container justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" className="nav-link">Nuestros Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">Sobre Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contáctanos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;