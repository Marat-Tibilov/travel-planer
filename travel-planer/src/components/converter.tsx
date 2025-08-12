'use client'

import { useState } from "react";
import { currencies } from "@/constants/currencies";
import {handleConverter} from "@/services/api/exchange";


export function CurrencyConverter() {
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [amount, setAmount] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setAmount(value);
        }
    };

    return (
        <div className="space-y-6 p-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800">Конвертор валют</h2>

            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Сумма</label>
                <input
                    id="amount"
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Введите сумму"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex gap-4 flex-wrap">
                <div className="w-full sm:w-1/2">
                    <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700">Из валюты</label>
                    <select
                        id="fromCurrency"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        {currencies.map((item) => (
                            <option key={item.code} value={item.code}>
                                {item.name} ({item.code})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full sm:w-1/2">
                    <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700">В валюту</label>
                    <select
                        id="toCurrency"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        {currencies.map((item) => (
                            <option key={item.code} value={item.code}>
                                {item.name} ({item.code})
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={() => handleConverter(fromCurrency, toCurrency, parseFloat(amount), setResult)}
                className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
                Конвертировать
            </button>

            {result !== null && (
                <div className="mt-4 text-center">
                    <span className="text-lg font-bold text-gray-800">
                        Результат: <span className="text-blue-600">{result.toFixed(1)} {(toCurrency)}</span>
                    </span>
                </div>
            )}
        </div>
    );
}
