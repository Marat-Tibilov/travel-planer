'use client';

import { useState } from 'react';
import {ProfileNavigation} from "@/components/profile-navigation";
import {useLogout} from "@/store/use-auth-state";
import toast from "react-hot-toast";
import {FirebaseError} from "firebase/app";

export function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Имя пользователя');
    const logoutStore = useLogout();

    const handleSave = () => setIsEditing(false);
    const handleEdit = () => setIsEditing(true);

    const logout = async () => {
        try {
            await logoutStore();
            logoutStore();
        }catch (e) {
            if (e instanceof FirebaseError) {
                toast.error(e.message || "Не удалось выйти");
            }
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded-lg">

            <div className="flex flex-col items-start sm:flex-colom sm:items-center gap-4">
                <div className="flex w-full items-center justify-around">
                    <img
                        src="/user.svg"
                        alt="Avatar"
                        className="w-16 h-16 rounded-full object-cover"
                    />

                    {isEditing ? (
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border px-2 py-2 rounded text-sm w-full"
                        />
                    ) : (
                        <h2 className="text-xl font-semibold">{name}</h2>
                    )}

                </div>
                <button
                    onClick={isEditing ? handleSave : handleEdit}
                    className="cursor-pointer mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium w-full"
                >
                    {isEditing ? 'Сохранить' : 'Изменить имя'}
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">
                <ProfileNavigation/>
                <button
                    onClick={logout}
                    className="cursor-pointer w-full bg-red-100 hover:bg-red-200 rounded-lg py-3 text-sm font-medium text-red-600"
                >
                    Выйти
                </button>
            </div>
        </div>
    );
}
