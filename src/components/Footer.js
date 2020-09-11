import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <React.Fragment>
                <footer className="container sticky-bottom">
                    <p className="float-right"><a href="#">Volver arriba</a></p>
                    <p>&copy; 2020 Plantiweb, Inc. &middot; <a href="/">Privacidad</a> &middot; <a href="/">Terminos</a></p>
                </footer>
        </React.Fragment>
    )
}

export default Footer
