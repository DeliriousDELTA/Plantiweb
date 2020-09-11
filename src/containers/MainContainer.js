import React from 'react';
import './MainContainer.css';
import img1 from '../images/mainPage.jpg'
import img2 from '../images/ContainerPlantas.jpg'
import img3 from '../images/Carrusel1.jpg'
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainContainer = () => {
    return (
        <React.Fragment>
            <NavBar/>            
            <main role="main">
                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img3} className='d-block w-100' alt="BellasArtes"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Plantas que te cuidan</h1>
                                    <p>¡Crea tu itinerario, reserva experiencias para ti y tus seres queridos!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/shop" role="button">Comprar</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src={img1} className='d-block w-100'alt="Playa" />
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Llena de vida tu alrededor</h1>
                                    <p>¡Crea tu itinerario, reserva experiencias para ti y tus seres queridos!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/shop" role="button">Comprar</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src={img2} className='d-block w-100' alt="Ruinas Chichen Itza"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Conoce a tu planta</h1>
                                    <p>¡Crea tu itinerario, reserva experiencias para ti y tus seres queridos!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/shop" role="button">Comprar</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                
                
                <div className="container marketing">
                
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Conoce nuevas plantas <span class="text-muted">No te decepcionarán.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img src='https://www.modelplusmodel.com/images/thumbnails/450/450/detailed/2/mpm_v09_22_02.jpg' className="bd-placeholder-img " width="450" height="450" alt="Montaña"/>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Alegra el lugar donde vivas <span class="text-muted"> no está de más un poco de verde</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                        <img src='https://casika.es/wp-content/uploads/2018/03/317002080-5.png' className="bd-placeholder-img " width="450" height="450" alt="Angel de Reforma" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Conoce, explora, cuida<span class="text-muted">, siempre hay una planta para ti.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img src='https://http2.mlstatic.com/4-mini-macetas-ceramica-con-planta-artificial-escritorio-D_NQ_NP_803549-MLM26721478520_012018-F.jpg' className="bd-placeholder-img " width="450" height="450" alt="Mujer Saltando"/>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>
                 
                
            </main>
            <Footer />
        </React.Fragment >        
    )

}

export default MainContainer;
