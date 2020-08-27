import React from 'react';
import './NavBar.css';
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom';

const NavBar = (active) => {
    return (
        <React.Fragment>
            <header className="masthead fixed-top mb-auto">
                <div className="inner">
                    <div className="masthead-brand">
                    <Link className="nav-brand " to="/">
                        <img src={Logo} width="150" height="150" alt="Logo" loading="lazy" />                        
                    </Link>
                    </div>
                    <nav className="nav nav-masthead justify-content-center">
                        <Link className="nav-link " to="/">Inicio</Link>
                        <Link className="nav-link" to="/plantas">WikiPlants</Link>
                        <Link className="nav-link" to="#">Contacto</Link>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default NavBar
