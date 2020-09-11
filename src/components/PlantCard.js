import React from 'react'
import './PlantCard.css'

export const PlantCard = (props) => {

    const { 
        name = "default Plant",
        price = 0,
        type= "Type default",
        description = "Esse cupidatat cupidatat magna eiusmod voluptate veniam cillum.",
        image,
        size= "Default",
        stock= 0,
        careLevel= "Default",
        petFriendly= false,
    } = props

    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={image} className="card-img-top w-100 h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Tipo: {type}</p>
                    <p className="card-text">Tamaño: {size}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Dificultad: {careLevel}</p>
                </div>
            </div>
        </div>
    )
}

export default PlantCard
