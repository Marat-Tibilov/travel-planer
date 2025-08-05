import {FormEvent, useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "@/config/fierbase.config";
import toast from "react-hot-toast";


export function useSaveTrip() {
    const [city , setCity] = useState('');
    const [information, setInformation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    const saveTrips = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!city.trim() || !information.trim() || !startDate || !endDate) {
            toast.error('Пожалуйста, заполните все поля');
            return;
        }

        try {
            const cityRef = await addDoc(collection(db, "trips"), {
                city,
                information,
                startDate,
                endDate,
                createdAt: new Date().toISOString(),
                userId: auth.currentUser?.uid || null,
            });

            toast.success('Поездка успешно сохранена!');
            console.log('Id документа', cityRef.id)

        }catch (e){
            console.error(e);
            toast.error('Произошла ошибка при сохранении');
        }

        setCity('');
        setInformation('');
        setStartDate('');
        setEndDate('');

    }

    return {
        city,
        information,
        startDate,
        endDate,
        saveTrips,
        setCity,
        setInformation,
        setStartDate,
        setEndDate
    }
}