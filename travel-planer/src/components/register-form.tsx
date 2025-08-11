'use client'


import { useRegister} from "@/store/use-auth-state";
import {FormEvent, useState} from "react";
import {registerUser} from "@/services/auth/fierbase.auth";
import toast from "react-hot-toast";

export default function RegisterForm() {
    const registerStore = useRegister();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            registerStore();
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message || "Не удалось зарегестрироваться")
                console.error("Ошибка регистрации:", error);
            }
        }
    };

    return (
        <div className="flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Регистрация</h2>

                <form className="space-y-4" onSubmit={register}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Пароль
                        </label>
                        <input
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            id="password"
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}
