import {WIKI_URL} from "@/constanst/api.constants";
import {WikiI} from "@/shared/types/api.interfaces";

export async function fetchCitySummary(city: string): Promise<WikiI | null> {
    const url = `${WIKI_URL}${encodeURIComponent(city)}`;
    const response = await fetch(url);

    if (!response.ok) {
        console.warn(`Не удалось найти город "${city}": статус ${response.status}`);
        return null;
    }

    const data = await response.json();

    return {
        title: data.title || city,
        description: data.description || '',
        extract: data.extract || '',
        img: data.thumbnail?.source || null,
    };
}