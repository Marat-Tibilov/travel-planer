interface Attraction {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    wikipediaUrl: string;
}

export async function getCityAttractions(city: string): Promise<Attraction[]> {
    const url = `https://ru.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=интересные+места+${encodeURIComponent(city)}&gsrlimit=5&prop=extracts|pageimages|info&exintro=1&explaintext=1&pithumbsize=500&inprop=url&format=json&origin=*`;

    const response = await fetch(url);
    const data = await response.json();

    return Object.values(data.query.pages).map((page: any) => ({
        id: page.pageid,
        title: page.title,
        description: page.extract || 'Описание отсутствует',
        imageUrl: page.thumbnail?.source,
        wikipediaUrl: page.fullurl
    }));
}