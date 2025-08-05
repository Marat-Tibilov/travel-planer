import { db } from "@/config/fierbase.config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ITrip } from "@/shared/types/api.interfaces";
import toast from "react-hot-toast";
import { auth } from "@/config/fierbase.config";
import { onAuthStateChanged } from "firebase/auth";

export function useGetTrips() {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
                setTrips([]);
            }
        });

        return () => unsubscribe();
    }, []);


    useEffect(() => {
        if (!userId) return;

        const q = query(collection(db, "trips"), where("userId", "==", userId));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const tripData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ITrip, "id">),
                }));
                setTrips(tripData);
                setIsLoading(false);
            },
            (error) => {
                toast.error("Ошибка при получении данных");
                console.error(error);
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, [userId]);

    return { isLoading, trips };
}
