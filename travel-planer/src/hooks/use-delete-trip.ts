import {deleteDoc, doc} from "@firebase/firestore";
import {db} from "@/config/fierbase.config";
import toast from "react-hot-toast";
import {ITrip} from "@/shared/types/api.interfaces";


export async function useDeleteTrip(id : ITrip['id']) {
    try {
        await deleteDoc(doc(db, "trips", id));
        toast.success("Поездка удалена");

    } catch (error) {
        console.error("Ошибка при удалении:", error);
        toast.error("Ошибка при удалении поездки");
    }
}