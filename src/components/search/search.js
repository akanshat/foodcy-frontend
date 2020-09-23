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
        </div>
    );

}


export default Search;