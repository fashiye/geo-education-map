import React, { useState } from 'react';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar';
import { Province, City } from './types';

const App: React.FC = () => {
    const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [cityInfo, setCityInfo] = useState<string>('');

    const handleProvinceClick = (province: Province) => {
        setSelectedProvince(province);
        setSelectedCity(null);
        setCityInfo(province.introduction || '');
    };

    const handleCityClick = (city: City) => {
        setSelectedCity(city);
        setCityInfo(city.introduction || '');
    };

    const fetchCityInfo = async (cityName: string) => {
        // Call the Deep Seek API to get city information
        const info = await fetch(`/api/deepseek?city=${cityName}`);
        const data = await info.json();
        setCityInfo(data.introduction);
    };

    return (
        <div className="app-container">
            <MapView 
                selectedProvince={selectedProvince} 
                selectedCity={selectedCity} 
                onProvinceClick={handleProvinceClick} 
                onCityClick={handleCityClick} 
                fetchCityInfo={fetchCityInfo}
            />
            <Sidebar cityInfo={cityInfo} />
        </div>
    );
};

export default App;