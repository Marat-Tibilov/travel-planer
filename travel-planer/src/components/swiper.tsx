import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {CityCard} from "@/components/city-card";
import {WikiI} from "@/shared/types/api.interfaces";

export const CitiesSwiper = ({ cities, isLoading }: { cities: WikiI[]; isLoading: boolean }) => {
    if (isLoading) {
        return (
            <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Популярные города</h3>
                <div className="flex space-x-4 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="min-w-[200px] bg-gray-100 rounded-lg animate-pulse h-[180px]">
                            <div className="h-28 bg-gray-200 rounded-t-lg"></div>
                            <div className="p-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                                <div className="h-3 bg-gray-200 rounded w-5/6 mt-1"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


    return (
        <div className="mt-6 relative">
            <h3 className="text-lg font-medium mb-4">Популярные города</h3>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3.5}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    640: { slidesPerView: 4.5 },
                    1024: { slidesPerView: 5.5 },
                }}
                className="relative"
            >
                {cities.map((city) => (
                    <SwiperSlide key={city.title}>
                        <CityCard
                            city={city.title}
                            img={city.img}
                            description={city.extract}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-prev !left-0 !text-gray-800 after:!text-xl"></div>
            <div className="swiper-button-next !right-0 !text-gray-800 after:!text-xl"></div>
        </div>
    );
};