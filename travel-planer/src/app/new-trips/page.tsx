import type {Metadata} from "next";
import {NewTripForm} from "@/components/new-trip-form";


export const metadata: Metadata = {
    title: "New Trip",
};

export default function NewTrip() {

    return (
        <section className="w-full flex justify-center px-4 py-2">
            <NewTripForm/>
        </section>
    );
}
