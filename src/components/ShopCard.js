import React from 'react'
import { Link } from 'react-router-dom'

function ShopCard(props) {
    const { 
        name = "Default Plant",
        price = 0,
        type= "Type default",
        description = "Esse cupidatat cupidatat magna eiusmod voluptate veniam cillum.",
        image="https://www.elmueble.com/medio/2019/10/15/maceta-blanca-con-base-de-madera-de-la-redoute_82355f1a_1200x1200.jpg",
        size= "Default",
        stock= 0,
        careLevel= "Default",
        petFriendly= false,
    } = props
    return (
        <React.Fragment>
            <div class="col mb-4">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text">Tipo: {type}</p>

                        <p><Link className="btn btn-lg btn-primary" to="/shop" role="button">${price}</Link></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShopCard
