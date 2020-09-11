import React from 'react';
import './PlantasContainer.css';
import PlantCard from '../components/PlantCard';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PlantasContainer = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <main role="main" className="main w-100  flex-column" >
                <section className="jumbotron w-100 h-20">
                <div className="container">
                    <h1>Cuidado de las Plantas</h1>
                </div>
                </section>
                <div className="album py-5 ">
                    <div className="container ">
                        <div className="row">
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />
                            <PlantCard />

                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
            
        </React.Fragment>
    )
}

export default PlantasContainer
