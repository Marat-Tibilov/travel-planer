import {useEffect, useState} from "react";
import {WikiI} from "@/shared/types/api.interfaces";
import {popularCities} from "@/constants/swiper.constants";
import {fetchCitySummary} from "@/services/api/wiki";
import toast from "react-hot-toast";



export function useCitiesData() {
    const [citiesData, setCitiesData] = useState<WikiI[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchCities = async () => {
        try {
            setIsLoading(true);
            const cities = await Promise.all(
                popularCities.map(city => fetchCitySummary(city))
            );
            setCitiesData(cities.filter(Boolean) as WikiI[]);
        } catch (error) {
            console.error("Ошибка загрузки городов:", error);
            toast.error('Ошибка загрузки городов')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    return { citiesData, isLoading };
}