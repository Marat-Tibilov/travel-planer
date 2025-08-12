import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@firebase/auth";
import {auth} from "@/config/fierbase.config";
import {FirebaseError} from "firebase/app";





export const registerUser = async (email: string, password: string) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
        if (!(error instanceof FirebaseError)) return;
        if (error.code === "auth/weak-password") {
            throw new Error("Пароль должен быть не менее 6 символов");
        }
        if (error.code === "auth/email-already-in-use") {
            throw new Error("Пользователь с таким email уже существует");
        }
        throw new Error("Не удалось выполнить регистрацию");
    }
};


export const loginUser = async (email: string, password: string) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
        if (!(error instanceof FirebaseError)) return;
        if (error.code === "auth/user-not-found") {
            throw new Error("Пользователь с таким email не найден");
        }
        if (error.code === "auth/wrong-password") {
            throw new Error("Неверный пароль");
        }
        throw new Error("Не удалось выполнить вход");
    }
};


export const logoutUser = async () => {
    return await signOut(auth);
}