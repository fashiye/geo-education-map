import axios from 'axios';

const AMAP_API_KEY = '46eaf29c2fb11c5c66f7583d7f451995'; // 替换为你的高德API Key
const AMAP_BASE_URL = 'https://restapi.amap.com/v3';

/**
 * 获取省份信息（含下属城市）
 */
export const getProvinceInfo = async (provinceName: string) => {
    try {
        const response = await axios.get(`${AMAP_BASE_URL}/district`, {
            params: {
                key: AMAP_API_KEY,
                keywords: provinceName,
                subdistrict: 1,
                extensions: 'all'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching province info:', error);
        throw error;
    }
};

/**
 * 获取城市信息
 */
export const getCityInfo = async (cityName: string) => {
    try {
        const response = await axios.get(`${AMAP_BASE_URL}/district`, {
            params: {
                key: AMAP_API_KEY,
                keywords: cityName,
                subdistrict: 0,
                extensions: 'all'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching city info:', error);
        throw error;
    }
};

/**
 * 获取指定位置周边地标数据
 */
export const getMapData = async (location: string) => {
    try {
        const response = await axios.get(`${AMAP_BASE_URL}/place/around`, {
            params: {
                key: AMAP_API_KEY,
                location: location,
                radius: 1000,
                types: '地标'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching map data:', error);
        throw error;
    }
};