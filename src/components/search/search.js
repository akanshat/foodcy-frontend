import React from 'react';
import './search.css';
const Search = ({ query, setQuery }) => {

    return (
        <div className="searchbar" >
            <input type="text"
                className="searchbox"
                name="query" value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..." />
                
            <button className="searchButton" type="submit">Search</button>
        </div>
    );

}


export default Search;