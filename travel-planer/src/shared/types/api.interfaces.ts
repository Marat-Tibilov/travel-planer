export interface WikiI {
    title: string;
    description: string;
    extract: string;
    img: string;
}

export interface CityCardProps {
    city: string;
    img: string;
    description: string;
}

export interface CityDetails {
    city: string;
    description: string;
    img: string;
}

export interface ITrip {
    id: string;
    city: string
    createdAt: string;
    endDate: string;
    information: string;
    startDate: string;
}