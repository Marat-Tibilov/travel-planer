'use client'

import {CitiesSwiper} from "@/components/swiper";
import {useCitiesData} from "@/hooks/use-cities-data";
import {useSaveTrip} from "@/hooks/use-save-trip";

export const NewTripForm = () => {
    const { citiesData, isLoading } = useCitiesData();
    const {city, information, startDate, endDate, saveTrips, setCity, setInformation, setStartDate, setEndDate} = useSaveTrip()
    const today = new Date().toISOString().split("T")[0];

    return (
        <form
            className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm overflow-hidden"
            onSubmit={(event) => {
                saveTrips(event)
            }}
        >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Добавить новую поездку</h2>

            <div className="space-y-4 md:space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">Город</label>
                    <input
                        value={city}
                        type="text"
                        className="w-full p-3 md:p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-base md:text-lg"
                        placeholder="Введите город"
                        required
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">Информация о поездке</label>
                    <textarea
                        value={information}
                        className="w-full p-3 md:p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-base md:text-lg"
                        rows={3}
                        placeholder="Добавьте информацию о поездке"
                        onChange={(e) => {
                            setInformation(e.target.value)
                        }}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-1 md:mb-2">Начало поездки</label>
                        <input
                            value={startDate}
                            min={today}
                            type="date"
                            className="w-full p-3 md:p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-base md:text-lg"
                            required
                            onChange={(e) => {
                                setStartDate(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 md:mb-2">Конец поездки</label>
                        <input
                            value={endDate}
                            min={startDate}
                            type="date"
                            className="w-full p-3 md:p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-base md:text-lg"
                            required
                            onChange={(e) => {
                                setEndDate(e.target.value)
                            }}
                        />
                    </div>
                </div>

                <button
                    className="cursor-pointer w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg hover:bg-blue-700 transition text-base md:text-lg"
                    type="submit"
                >
                    Сохранить
                </button>
            </div>

            <div className="mt-6 md:mt-8">
                <CitiesSwiper cities={citiesData} isLoading={isLoading}/>
            </div>
        </form>
    );
};