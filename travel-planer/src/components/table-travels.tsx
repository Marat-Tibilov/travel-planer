'use client'

import { useGetTrips } from "@/hooks/use-get-trips";
import { deleteTrip } from "@/hooks/use-delete-trip";

export function TableTravels() {
    const { isLoading, trips } = useGetTrips();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <div className="min-w-0 w-full">
                <table className="w-full border-collapse">

                    <thead className="hidden md:table-header-group">
                    <tr className="border-b border-gray-500">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[20%]">Город</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[40%]">Комментарий</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[20%]">Даты</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[20%]">Действия</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                    {trips.map((trip) => (
                        <tr key={trip.id} className="block md:table-row border-b border-gray-200 last:border-0">

                            <td className="block md:table-cell px-4 py-3 md:w-[20%]">
                                <div className="md:hidden font-medium text-gray-500 mb-1">Город</div>
                                <div className="whitespace-nowrap">{trip.city}</div>
                            </td>

                            <td className="block md:table-cell px-4 py-3 md:w-[40%]">
                                <div className="md:hidden font-medium text-gray-500 mb-1">Комментарий</div>
                                <div className="relative">
                                    <div className="line-clamp-2 md:line-clamp-none">
                                        {trip.information}
                                    </div>
                                    <button
                                        className="md:hidden text-blue-500 text-sm mt-1"
                                        onClick={(e) => {
                                            const target = e.currentTarget as HTMLButtonElement;
                                            const textElement = target.previousElementSibling as HTMLDivElement | null;

                                            if (textElement) {
                                                textElement.classList.toggle('line-clamp-2');
                                                target.textContent =
                                                    target.textContent === 'Показать всё' ? 'Свернуть' : 'Показать всё';
                                            }
                                        }}
                                    >
                                        Показать всё
                                    </button>
                                </div>
                            </td>


                            <td className="block md:table-cell px-4 py-3 md:w-[20%]">
                                <div className="md:hidden font-medium text-gray-500 mb-1">Даты</div>
                                <div className="whitespace-nowrap">
                                    с {trip.startDate} до {trip.endDate}
                                </div>
                            </td>


                            <td className="block md:table-cell px-4 py-3 md:w-[20%]">
                                <div className="md:hidden font-medium text-gray-500 mb-1">Действия</div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <button
                                        className="cursor-pointer px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                                    >
                                        Редактировать
                                    </button>
                                    <button
                                        className="cursor-pointer px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
                                        onClick={() => deleteTrip(trip.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}