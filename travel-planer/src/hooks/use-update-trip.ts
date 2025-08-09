import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/fierbase.config";
import {ITrip} from "@/shared/types/api.interfaces";


export function useUpdateTrip() {
    const updateTrip = async (id: string, updatedData: Partial<ITrip>) => {
        const tripRef = doc(db, "trips", id);
        await updateDoc(tripRef, updatedData);
    };

    return { updateTrip };
}
