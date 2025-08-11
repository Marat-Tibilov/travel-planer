import {useLogin} from "@/store/use-auth-state";
import {FormEvent, useState} from "react";
import {loginUser} from "@/services/auth/fierbase.auth";
import toast from "react-hot-toast";



export function LoginForm() {
    const loginStore = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            loginStore();
        } catch (error: unknown) {
            if(error instanceof Error) {
                toast.error(error.message);
                console.error("Ошибка входа в аккаунт:", error);
            }
        }
    };



    return (
        <div className="flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Войти</h2>

                <form className="space-y-4" onSubmit={login}>

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
                            onChange={(e) => setPassword(e.target.value)}
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
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}