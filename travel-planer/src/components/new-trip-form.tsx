'use client'

import {CitiesSwiper} from "@/components/swiper";
import {useCitiesData} from "@/hooks/use-cities-data";
import {useSaveTrip} from "@/hooks/use-save-trip";



export const NewTripForm = () => {

    const { citiesData, isLoading } = useCitiesData();
    const {city, information, startDate, endDate, saveTrips, setCity, setInformation, setStartDate, setEndDate} = useSaveTrip()
    const today = new Date().toISOString().split("T")[0];


    return (
        <form className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm" onSubmit={(event) => {saveTrips(event)}}>
            <h2 className="text-2xl font-bold mb-6">Добавить новую поездку</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Город</label>
                    <input
                        value={city}
                        type="text"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-lg"
                        placeholder="Введите город"
                        required
                        onChange={(e) => {setCity(e.target.value)}}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Информация о поездке</label>
                    <textarea
                        value={information}
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-lg"
                        rows={5}
                        placeholder="Добавьте информацию о поездке"
                        onChange={(e) => {setInformation(e.target.value)}}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Начало поездки</label>
                        <input
                            value={startDate}
                            min={today}
                            type="date"
                            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-lg"
                            required
                            onChange={(e) => {setStartDate(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Конец поездки</label>
                        <input
                            value={endDate}
                            min={startDate}
                            type="date"
                            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-200 text-lg"
                            required
                            onChange={(e) => {setEndDate(e.target.value)}}
                        />
                    </div>
                </div>

                <button className=" cursor-pointer w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg" type="submit">
                    Сохранить
                </button>
            </div>

            <CitiesSwiper cities={citiesData} isLoading={isLoading}/>
        </form>
    );
};