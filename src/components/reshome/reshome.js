import React, { useEffect, useState } from 'react';
import './reshome.css';
import Map from '../map/map';
import star from '../../assets/rating.svg';
import { useParams } from 'react-router-dom';
import config from '../../config';
import AddReview from '../addreview/addreview';
import {useAuth} from '../../contexts/auth';

const MenuItem = ({ item }) => {

    return (

        <div className="menuitem">
            <span className="dishname">
                {item.dishname}
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
                    {item.name}
                </span>

                <span className="reviewrating">
                    <img alt="img" src={star} />
                    {item.rating}
                </span>

            </div>
            <span className="reviewContent">

                {item.content}
            </span>
        </div>
    );
}

const ResHome = () => {
    const [isOpen, setIsOpen] =  useState(false);
    const { id } = useParams();
    const [restaurant, setRes] = useState();
    const {token} = useAuth();

    useEffect(() => {
        const { backendURL } = config;
        fetch(`${backendURL}/api/restaurant`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
            .then(response => response.json())
            .then(result => setRes(result.restaurant));
    }, [id]);

    if (!restaurant) {
        return (
            <div className="reshome">
                <h1>Loading...</h1>
            </div>
        );
    }

    const modifyReviews = (review) => {
        setRes(rest => {
            const payload = {
                ...rest,
                reviews: rest.reviews.concat(review),
            };
            return payload;
        })
    }

    const { name, address, rating, menu, reviews, latitude, longitude } = restaurant;

    return (

        <>
            <AddReview isOpen={isOpen} setIsOpen={setIsOpen} id={id} token={token} modifyReviews={modifyReviews}/>
            <div className="reshome"  >
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

                <div className="part2" >
                    <div className="menudiv">
                        <h1>Menu</h1>
                        {menu.map(item => <MenuItem item={item} key={item.dishname} />)}
                    </div>
                    <div className="mapdiv">
                        <h1>Address</h1>
                        <Map lat={latitude} long={longitude} />
                    </div>
                </div>

                <div className="reviewdiv">
                    <div className="reviewsection">
                        <h1>Reviews</h1>
                        {token && <button className="reviewbtn" onClick={()=> setIsOpen(true)}>Add Review</button>}
                    </div>
                    {reviews.length === 0 && <h2>No reviews yet.</h2>}
                    {reviews.map((item, index) => <ReviewItem item={item} key={index} />)}

                </div>
            </div>
        </>
    );
}


export default ResHome;