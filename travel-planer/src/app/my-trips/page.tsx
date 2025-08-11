import {TableTravels} from "@/components/table-travels";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "My Trips",
}

export default function Home() {

    return (
        <>
            <TableTravels/>
        </>
    );
}