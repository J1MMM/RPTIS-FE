import { useEffect, useState } from "react";
import {
    regions as fetchRegions,
    provinces as fetchProvinces,
    cities as fetchCities,
    barangays as fetchBarangays,
} from "select-philippines-address";

function usePhLocations({ selectedRegion, selectedProvince, selectedCity }) {
    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [barangays, setBarangays] = useState([]);

    // Fetch regions on mount
    useEffect(() => {
        fetchRegions().then((data) => setRegions(data));
    }, []);

    // Fetch provinces when region changes
    useEffect(() => {
        if (selectedRegion) {
            const regionObj = regions.find((r) => r.region_name === selectedRegion);
            if (regionObj) {
                fetchProvinces(regionObj.region_code).then((data) => setProvinces(data));
            }
            setCities([]);
            setBarangays([]);
        }
    }, [selectedRegion, regions]);

    // Fetch cities when province changes
    useEffect(() => {
        if (selectedProvince) {
            const provinceObj = provinces.find((p) => p.province_name === selectedProvince);
            if (provinceObj) {
                fetchCities(provinceObj.province_code).then((data) => setCities(data));
            }
            setBarangays([]);
        }
    }, [selectedProvince, provinces]);

    // Fetch barangays when city changes
    useEffect(() => {
        if (selectedCity) {
            const cityObj = cities.find((c) => c.city_name === selectedCity);
            if (cityObj) {
                fetchBarangays(cityObj.city_code).then((data) => setBarangays(data));
            }
        }
    }, [selectedCity, cities]);

    // Map to { label, value, code } format
    const regionsOptions = regions.map((r) => ({
        label: r.region_name,
        value: r.region_name,
    }));
    const provinceOptions = provinces.map((p) => ({
        label: p.province_name,
        value: p.province_name,
    }));
    const cityOptions = cities.map((c) => ({
        label: c.city_name,
        value: c.city_name,
    }));
    const barangayOptions = barangays.map((b) => ({
        label: b.brgy_name,
        value: b.brgy_name,
    }));

    return { regionsOptions, provinceOptions, cityOptions, barangayOptions };
}

export default usePhLocations;
