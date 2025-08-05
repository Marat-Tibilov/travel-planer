'use client'

import {useState} from "react";
import RegisterForm from "@/components/register-form";
import {LoginForm} from "@/components/login-form";
import {useIsAuth} from "@/store/use-auth-state";

export function CheckAuth({ children }: { children: React.ReactNode }) {
    const isAuthenticated = useIsAuth();
    const [isLogin, setIsLogin] = useState(true);

    if (!isAuthenticated) return (
        <div className="flex flex-col justify-center items-center gap-8 text-center p-4 mt-10 max-w-md mx-auto">
            <h1 className="text-xl font-semibold mb-4">
                {isLogin ?
                    'Войдите в аккаунт , чтобы продолжить'
                    : "Зарегистрируйтесь, чтобы начать"
                }
            </h1>

            {isLogin ? <LoginForm /> : <RegisterForm />}

          <button
              className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
          >
              {isLogin ?
                  'Нажмите , чтобы создать новый аккаунт аккаунт'
                  : "Нажмите , чтобы войти в аккаунт"
              }
          </button>
        </div>


    );

    return <> {children}</>;
}