import { useState } from "react";
import { ITrip } from "@/shared/types/api.interfaces";
import { useUpdateTrip } from "@/hooks/use-update-trip";
import toast from "react-hot-toast";

interface EditTripModalProps {
    trip: ITrip;
    onClose: () => void;
}

export function EditTripModal({ trip, onClose }: EditTripModalProps) {
    const today = new Date().toISOString().split("T")[0];

    const { updateTrip } = useUpdateTrip();

    const [city, setCity] = useState(trip.city);
    const [information, setInformation] = useState(trip.information);
    const [startDate, setStartDate] = useState(trip.startDate);
    const [endDate, setEndDate] = useState(trip.endDate);


    const handleSave = async () => {
        onClose();

        try {
            await updateTrip(trip.id, { city, information, startDate, endDate });
            toast.success("Данные успешно обновились!")
        } catch {
            toast.error("Ошибка при сохранении. Попробуйте снова.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
                <h2 className="text-lg font-bold mb-4">Редактировать поездку</h2>


                <input
                    className="border p-2 w-full mb-2 rounded-md"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <textarea
                    className="border p-2 w-full mb-2 rounded-md"
                    value={information}
                    onChange={(e) => setInformation(e.target.value)}
                />

                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="date"
                        className="border p-2 w-full rounded-md"
                        value={startDate}
                        min={today}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        min={startDate}
                        type="date"
                        className="border p-2 w-full rounded-md"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                    >
                        Отмена
                    </button>
                    <button
                        onClick={handleSave}
                        className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
}
