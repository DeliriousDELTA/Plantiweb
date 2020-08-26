import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = (active) => {
    return (
        <React.Fragment>
            <header className="masthead fixed-top mb-auto">
                     <div className="inner">
                        <h3 className="masthead-brand">Suculenta</h3>
                        <nav className="nav nav-masthead justify-content-center">
                            <Link className="nav-link " to="/">Inicio</Link>
                            <Link className="nav-link" to="/plantas">Plantas</Link>
                            <a className="nav-link" href="">Contacto</a>
                        </nav>
                    </div> 
                </header>
        </React.Fragment>
    )
}

export default NavBar
