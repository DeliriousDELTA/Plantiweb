import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShopCard from '../components/ShopCard';

const ShopContainer = () => {
    return (
        <React.Fragment>
            <main role="main" className="main w-100  flex-column" >
                <section>
                    <Header />
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

        </React.Fragment>
    )
}

export default ShopContainer
