import React from 'react';
import { Link } from 'react-router-dom';
import './restaurantCard.css';
const RestaurantCard = ({ restaurant }) => {
    const { image, name, rating, address, _id: id } = restaurant;
    return (
        <Link to={`/restaurant/${id}`}>
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
        </Link>

    );
}


export default RestaurantCard;

