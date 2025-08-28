import regions from "@constants/locations/regions.json";


export const getRegions = () => regions;
export const getProvinces = async (regionCode) => {
    try {
        const provinces = (await import("@constants/locations/provinces.json")).default;

        return provinces.filter(p => String(p.region_code).trim() === regionCode);
    } catch (e) {
        console.error("Failed to fetch provinces.json", e);
        return [];
    }
};


export const getCities = async (provinceCode) => {
    try {
        const cities = (await import("@constants/locations/cities.json")).default;
        return cities.filter(c => c.province_code == provinceCode);
    } catch (e) {
        console.error("Failed to fetch cities.json", e);
        return [];
    }
};
export const getBarangays = async (cityCode) => {
    try {
        const barangays = (await import("@constants/locations/barangays.json")).default;
        return barangays.filter(b => b.city_code == cityCode)
    } catch (e) {
        console.error("Failed to fetch cities.json", e);
        return [];
    }
};
