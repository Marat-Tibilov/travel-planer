import {ITrip} from "@/shared/types/api.interfaces";
import {useUpdateTrip} from "@/hooks/use-update-trip";
import {useState} from "react";
import toast from "react-hot-toast";

interface EditModalProps {
    trip: ITrip;
    onClose: () => void;
}

export function useEditModal({ trip, onClose }: EditModalProps) {
    const today = new Date().toISOString().split("T")[0];

    const { updateTrip } = useUpdateTrip();

    const [city, setCity] = useState(trip.city);
    const [information, setInformation] = useState(trip.information);
    const [startDate, setStartDate] = useState(trip.startDate);
    const [endDate, setEndDate] = useState(trip.endDate);


    const handleSave = async () => {
        try {
            await updateTrip(trip.id, { city, information, startDate, endDate });
            onClose();
        } catch {
            toast.error("Ошибка при сохранени")
        }
    };

    return{
        today,
        city,
        information,
        startDate,
        endDate,
        setCity,
        setInformation,
        setStartDate,
        setEndDate,
        handleSave,
    }

}