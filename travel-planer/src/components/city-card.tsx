import {PAGES} from "@/config/pages.config";
import {useRouter} from "next/navigation";
import {CityCardProps} from "@/shared/types/api.interfaces";
import { useSetCity} from "@/store/use-city-detail-store";
import Image from "next/image";

export const CityCard = ({ city, img, description }: CityCardProps) => {
    const router = useRouter();
    const setCity = useSetCity()

    const openDetails = () => {
        setCity({city, description, img});
        router.push(PAGES.CITY_DETAILS(city));
    }

    return (
        <div
            className="p-2 md:p-3 border rounded-lg cursor-pointer hover:shadow-md transition-shadow h-full flex flex-col"
            onClick={openDetails}
        >
            {img && (
                <Image
                    src={img}
                    alt={city}
                    width={300}
                    height={200}
                    className="w-full h-20 md:h-28 object-cover rounded-md mb-1 md:mb-2"
                    loading="lazy"
                />
            )}
            <h4 className="font-medium text-xs md:text-sm">{city}</h4>
            {description && (
                <p className="text-[10px] md:text-xs text-gray-500 line-clamp-2 mt-0.5 md:mt-1">
                    {description}
                </p>
            )}
        </div>
    );
};