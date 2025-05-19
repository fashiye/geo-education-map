interface Window {
  AMap: any;
}

import React, { useEffect, useState } from 'react';
import { getProvinceInfo, getCityInfo } from '../api/amap';
import { getGeoDescription } from '../api/deepseek';
import { Province, City } from '../types';
import './MapView.css';

interface MapViewProps {
    selectedProvince: Province | null;
    selectedCity: City | null;
    onProvinceClick: (province: Province) => void;
    onCityClick: (city: City) => void;
    fetchCityInfo: (cityName: string) => Promise<void>;
}

const MapView: React.FC<MapViewProps> = ({
    selectedProvince,
    selectedCity,
    onProvinceClick,
    onCityClick,
    fetchCityInfo
}) => {
    const [map, setMap] = useState<any>(null);
    const [provinceInfo, setProvinceInfo] = useState('');
    const [cityInfo, setCityInfo] = useState('');
    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        const initMap = () => {
            // @ts-ignore
            const mapInstance = new window.AMap.Map('mapContainer', {
                zoom: 5,
                center: [123.4294, 41.7968], // 辽宁省中心坐标
            });
            setMap(mapInstance);
        };

        if ((window as any).AMap) {
            initMap();
        } else {
            // 动态加载高德地图JSAPI
            const script = document.createElement('script');
            script.src = `https://webapi.amap.com/maps?v=1.4.15&key=46eaf29c2fb11c5c66f7583d7f451995`;
            script.onload = initMap;
            document.body.appendChild(script);
        }
    }, []);

    const handleProvinceClick = async (provinceName: string) => {
        const data = await getProvinceInfo(provinceName) as any;
        setProvinceInfo(data.districts?.[0]?.introduction || '');
        setCities(data.districts?.[0]?.districts || []);
        zoomToProvince(provinceName);
    };

    const handleCityClick = async (cityName: string) => {
        const data = await getCityInfo(cityName) as any;
        setCityInfo(data.districts?.[0]?.introduction || '');
        zoomToCity(cityName);
    };

    const zoomToProvince = (provinceName: string) => {
        if (!map) return;
        map.setZoom(6);
        map.setCenter([123.4294, 41.7968]);
        highlightCities(cities);
    };

    const zoomToCity = (cityName: string) => {
        if (!map) return;
        const city = cities.find(c => c.name === cityName);
        if (city && city.center) {
            map.setZoom(8);
            map.setCenter(city.center);
        }
    };

    const highlightCities = (cities: City[]) => {
        // 高亮显示各个市的逻辑
        cities.forEach(city => {
            // 逻辑来高亮城市
        });
    };

    const handleMapClick = async () => {
        const result = await getGeoDescription(cityInfo, {});
        // 处理生成的地理介绍文本
    };

    return (
        <div id="mapContainer" onClick={handleMapClick}>
            <div className="province-info">{provinceInfo}</div>
            <div className="city-info">{cityInfo}</div>
        </div>
    );
};

export default MapView;