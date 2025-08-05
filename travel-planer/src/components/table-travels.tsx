'use client'



import {useGetTrips} from "@/hooks/use-get-trips";
import {useDeleteTrip} from "@/hooks/use-delete-trip";

export function TableTravels (){
    const { isLoading, trips } = useGetTrips();


    if(isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div
                    className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                <tr className="border-b border-gray-500">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[25%]">Город</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[50%]">Комментарий</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-[25%] md:pl-8">Даты</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                {trips.map((trip) => (
                    <tr key={trip.id}>
                        <td className="px-4 py-3 whitespace-nowrap w-[20%]">{trip.city}</td>
                        <td className="px-4 py-3 w-[35%]">{trip.information}</td>
                        <td className="px-4 py-3 whitespace-nowrap w-[20%] md:pl-8">
                            {trip.startDate} - {trip.endDate}
                        </td>
                        <td className="px-4 py-3 w-[25%] flex gap-2">
                            <button
                                className=" cursor-pointer px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                            >
                                Редактировать
                            </button>
                            <button
                                className=" cursor-pointer px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
                                onClick={() => useDeleteTrip(trip.id)}
                            >
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}