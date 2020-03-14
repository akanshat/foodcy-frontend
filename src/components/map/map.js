import React from 'react';

const Map = ({lat, long}) => {
    const apikey = "AIzaSyADiR2AC7ijorHM-GsFpqHYlyLuaTWj3uc";
    return (
        <iframe 
            title="map"
            frameborder="0"
            src={`https://www.google.com/maps/embed/v1/view?key=${apikey}&center=${lat},${long}&zoom=19`}
            allowfullscreen >
        </iframe >
    );
}

export default Map;