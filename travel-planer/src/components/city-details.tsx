'use client';

import {useSelectedCity} from "@/store/use-city-detail-store";


export function CityDetail() {

    const selectedCity = useSelectedCity();


    return (
        <div className="p-6">
            {selectedCity ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                    <div>
                        <h1 className="text-3xl font-bold mb-4">{selectedCity.city}</h1>
                        <p className="text-gray-700">{selectedCity.description}</p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={selectedCity.img}
                            alt={selectedCity.city}
                            className="max-w-full h-auto max-h-96 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            ) : (
                <h1 className="text-3xl font-bold">не найдены данные о городе</h1>
            )}
        </div>
    );
}