import {PAGES} from "@/config/pages.config";
import {useRouter} from "next/navigation";
import {CityCardProps} from "@/shared/types/api.interfaces";
import { useSetCity} from "@/store/use-city-detail-store";

export const CityCard = ({ city, img, description }: CityCardProps) => {
    const router = useRouter();
    const setCity = useSetCity()

    const openDetails = () => {
        setCity({city,  description , img});
        router.push(PAGES.CITY_DETAILS(city));
    }

    return (
        <div
            className="p-3 border rounded-lg cursor-pointer hover:shadow-md transition-shadow h-full"
            onClick={openDetails}
        >
            {img && (
                <img
                    src={img}
                    alt={city}
                    className="w-full h-28 object-cover rounded-md mb-2"
                />
            )}
            <h4 className="font-medium text-sm">{city}</h4>
            {description && (
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {description}
                </p>
            )}
        </div>
    );
};