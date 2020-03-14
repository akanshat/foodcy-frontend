import React from 'react';
import './reshome.css';
import Map from '../map/map';
import star from '../../assets/rating.svg';

const restaurant = {
    name: "Otto Enoteca & Pizzeria",
    address: "15th Avenue, New York, NY 10003",
    image: "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
    rating: "3.7",
    latitude: "40.732013",
    longitude: "-73.996155",
    menu: [
        {
            name: "tomato",
            price: "2",
            veg: true
        },
        {
            name: "meat",
            price: "3",
            veg: false

        }
    ],
    reviews: [
        {
            username: "akansha",
            review: "bekar hai",
            rating: 1
        },
        {
            username: "ruchika",
            review: "haaan haan theek hai na",
            rating: 4
        }
    ]
};

const MenuItem = ({ item }) => {

    return (
        <div className="menuitem">
            <span className="dishname">
                {item.name}
            </span>
            <span className="dishprice">
                &#8377;{item.price}
            </span>
        </div>
    );
}

const ReviewItem = ({ item }) => {

    return (
        <div className="reviewcontainer">
            <div className="reviewuserdiv">
                <span className="reviewUser">
                    {item.username}
                </span>

                <span className="reviewrating">
                    <img alt="img" src={star} />
                    {item.rating}
                </span>

            </div>
            <span className="reviewContent">
           
                {item.review}
            </span>
        </div>
    );
}

const ResHome = () => {

    const { name, address, rating, menu, reviews, latitude, longitude } = restaurant;

    return (
        <div className="reshome">
            <div className="resnamediv">
                <div>
                    <div className="part1">
                        <span className="namespan">
                            {name}
                        </span>
                        <span className="addspan">
                            {address}
                        </span>
                    </div>

                    <span className="ratingspan">
                        <img alt="img" src={star} />
                        {rating}
                    </span>
                </div>
            </div>

            <div className="part2">
                <div className="menudiv">
                    <h1>Menu</h1>
                    {menu.map(item => <MenuItem item={item} />)}
                </div>
                <div className="mapdiv">
                    <h1>Address</h1>
                    <Map lat={latitude} long={longitude} />
                </div>
            </div>

            <div className="reviewdiv">
                <h1>Reviews</h1>
                {reviews.map(item => <ReviewItem item={item} />)}

            </div>
        </div>
    );
}


export default ResHome;