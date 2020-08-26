import React from 'react';
import './MainContainer.css';
import {Link} from 'react-router-dom';

const MainContainer = () => {
    return (
        <React.Fragment >
            <div className="cover-container d-flex justify-content-center w-100 h-100 p-3 mx-auto flex-column" >
                <main role="main" className="inner cover ">
                    <h1 className="cover-heading">Plantas que te cuidan</h1>
                    <p className="lead">Tienda de plantitas con un manual de cuidados para cada una de las plantas</p>
                    <p className="lead">
                    <Link to="/shop" className="btn btn-lg btn-secondary">Ir a tienda</Link>
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>,      <a href="https://twitter.com/mdo">@PlantiWeb</a>.</p>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )

}

export default MainContainer;
