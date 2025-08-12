// utils/currencyConverterUtils.ts

import toast from "react-hot-toast";
import {EXCHANGE_URL} from "@/constants/api.constants";

export const handleConverter = async (
    fromCurrency: string,
    toCurrency: string,
    amount: number,
    setResult: React.Dispatch<React.SetStateAction<number | null>>
) => {
    try {
        const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_API_KEY;
        const response = await fetch(`${EXCHANGE_URL}/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();
        if (data.result === "success") {
            setResult(data.conversion_result);
        } else {
            toast.error('Ошибка при конвертации');
        }
    } catch (error) {
        console.error("Ошибка при конвертации:", error);
    }
};
