import React from 'react';
import { Link } from 'react-router-dom';
import ShopCard from '../components/ShopCard';
import './Shop Container.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ShopContainer = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <main role="main" className="main w-100  flex-column" >
                <section className="jumbotron w-100 h-20">
                <div className="container">
                    <h1>Checa a tu nuevo miembro de la familia</h1>
                </div>
                </section>

                <div className="album py-5 ">
                    <div className="container ">

                        <div class="row row-cols-1 row-cols-md-2">
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />                     
                            <ShopCard />
                            <ShopCard />
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default ShopContainer
