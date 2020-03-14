import React from 'react';
import './restaurantCard.css';
const RestaurantCard = ({restaurant}) => {
    const { image, name, rating, address }= restaurant;
    return(
        <div className="resCard">
            <img className="resimage" alt="resimage" src={image} />
            <div className="details">
                <div className="namediv">
                    <span className="resName">
                        {name}
                    </span>
                    <span className="rating">
                        {rating}
                    </span>
                </div>
                <span className="address">
                    {address}
                </span>
            </div>
        </div>
    );
}


export default RestaurantCard;

