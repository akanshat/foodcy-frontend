import React from 'react';
import './search.css';
const Search = () =>{
    return(
        <div className="searchbar" >
            <input type="text" className="searchbox" name="query" placeholder="Type to search..."/>
            <button className="searchButton" type="submit">Search</button>
        </div>
    );

}


export default Search;