import React from 'react';
import './PlantasContainer.css';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import {Link} from 'react-router-dom';

const PlantasContainer = () => {
    return (
        <React.Fragment>
            <main role="main" className="main w-100  flex-column" >
                <section>
                    <Header />
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
                <footer className="album text-muted w-100 flex-column">
                <div className="container">
                    <p className="float-right">
                        <Link to='#'>Back to top</Link>
                    </p>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
            </main>
            
        </React.Fragment>
    )
}

export default PlantasContainer
