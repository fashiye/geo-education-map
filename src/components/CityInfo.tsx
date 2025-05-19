import React from 'react';

interface CityInfoProps {
    cityName: string;
    cityDescription: string;
}

const CityInfo: React.FC<CityInfoProps> = ({ cityName, cityDescription }) => {
    return (
        <div className="city-info">
            <h2>{cityName}</h2>
            <p>{cityDescription}</p>
        </div>
    );
};

export default CityInfo;