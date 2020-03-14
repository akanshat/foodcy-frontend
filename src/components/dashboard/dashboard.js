import React from 'react';
import RestaurantCard from '../restaurantCard/restaurantCard';
import Search from '../search/search';
import './dashboard.css';

const restaurants = [
    {
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
    }
];


const Dashboard = () => {

    const restaurantCards = restaurants.map(res => <RestaurantCard restaurant={res} />)

    return (
        <>
            <Search />
            <div className="cards">
                {restaurantCards}
            </div>
        </>
    );
}


export default Dashboard;