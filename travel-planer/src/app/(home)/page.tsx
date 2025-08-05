import {TableTravels} from "@/components/table-travels";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Planer",
}

export default function Home() {

  return (
      <>
            <TableTravels/>
      </>
  );
}
