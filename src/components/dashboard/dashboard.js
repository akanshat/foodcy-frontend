import React, { useState, useEffect } from 'react';
import RestaurantCard from '../restaurantCard/restaurantCard';
import Search from '../search/search';
import './dashboard.css';
import config from '../../config';

const Dashboard = () => {
    const [query, setQuery] = useState("");
    const [restaurants, setRes] = useState([]);
    
    useEffect(() => {
        const { backendURL } = config;
        fetch(`${backendURL}/api/search`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query})
        })
        .then(response => response.json())
        .then(result => setRes(result.results));
    }, [query]);

    const restaurantCards = restaurants.map(res => <RestaurantCard restaurant={res} key={res._id} />)

    return (
        <>
            <Search query={query} setQuery={setQuery} />
            <div className="cards">
                {restaurantCards}
            </div>
        </>
    );
}


export default Dashboard;