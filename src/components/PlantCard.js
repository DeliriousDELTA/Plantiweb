import React from 'react'
import './PlantCard.css'

const PlantCard = () => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src="https://www.elmueble.com/medio/2019/10/15/maceta-blanca-con-base-de-madera-de-la-redoute_82355f1a_1200x1200.jpg" className="card-img-top w-100 h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Nombre Planta</h5>
                    <p className="card-text">Descripción</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default PlantCard
