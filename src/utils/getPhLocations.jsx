import { useEffect, useState } from "react";
import { getBarangays, getCities, getProvinces, getRegions } from "./locationUtils";

function usePhLocations({ selectedRegion, selectedProvince, selectedCity }) {
    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [barangays, setBarangays] = useState([]);

    // Fetch regions on mount
    useEffect(() => {
        setRegions(getRegions());
    }, []);

    // Fetch provinces when region changes
    useEffect(() => {
        const fetchProvinces = async () => {
            if (selectedRegion) {
                const regionObj = regions.find((r) => r.region_name === selectedRegion);
                if (regionObj) {
                    const regionsResult = await getProvinces(regionObj.region_code);
                    setProvinces(regionsResult);
                }
                setCities([]);
                setBarangays([]);
            }
        };

        fetchProvinces();
    }, [selectedRegion, regions]);

    useEffect(() => {
        const fetchCities = async () => {
            if (selectedProvince) {
                const provinceObj = provinces.find((p) => p.province_name === selectedProvince);
                if (provinceObj) {
                    const citiesResult = await getCities(provinceObj.province_code)
                    setCities(citiesResult);
                }
                setBarangays([]);
            }
        }
        fetchCities()
    }, [selectedProvince, provinces]);

    // Fetch barangays when city changes
    useEffect(() => {
        const fetchBarangays = async () => {

            if (selectedCity) {
                const cityObj = cities.find((c) => c.city_name === selectedCity);
                if (cityObj) {
                    const barangaysResult = await getBarangays(cityObj.city_code)
                    setBarangays(barangaysResult);
                }
            }
        }
        fetchBarangays()
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
