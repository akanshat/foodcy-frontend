import React from 'react';
import './reshome.css';
import star from '../../assets/rating.svg';

const restaurant = {
    name: "Otto Enoteca & Pizzeria",
    address: "15th Avenue, New York, NY 10003",
    image: "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
    rating:  "3.7",
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
    reviews:[
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

const MenuItem = ({item}) =>{

    return(
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


const ResHome = () => {

    const { name, address, rating, menu, reviews}= restaurant;

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
                        <img alt="img" src={star}/>
                        {rating}
                    </span>
                </div>
            </div>

            <div className="part2">
                <div className="menudiv">
                    <h1>Menu</h1>
                    {menu.map(item => <MenuItem item={item}/>)}
                </div>
                <div className="mapdiv">
                    
                </div>
            </div>

            <div className="reviewdiv">

            </div>
        </div>
    );
}


export default ResHome;