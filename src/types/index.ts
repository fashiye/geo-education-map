// This file defines the TypeScript types and interfaces used in the project to ensure type safety.

export interface Province {
    id: number;
    name: string;
    cities: City[];
    introduction?: string;
}

export interface City {
    id: number;
    name: string;
    description: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    introduction?: string;
    center?: [number, number]; // 新增，兼容高德API
}

export interface MapData {
    province: Province;
    highlightedCities: City[];
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}