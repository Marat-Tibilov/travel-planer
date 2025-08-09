import {Metadata} from "next";
import {CurrencyConverter} from "@/components/converter";


export const metadata: Metadata = {
    description: 'Converter page',
}

export default function () {
    return(
        <>
            <CurrencyConverter/>
        </>
    )
}