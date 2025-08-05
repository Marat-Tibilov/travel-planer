import {create, StateCreator} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";


interface IAction {
    login: () => void;
    register: () => void;
    logout: () => void;
}

interface IInitialState {
    isAuthenticated: boolean;
}

const initialState: IInitialState = {
    isAuthenticated: false,
}

interface IAuthStore extends IInitialState, IAction {}

const authStore: StateCreator<IAuthStore>  = (set) => ({
    ...initialState,
    login: () => set({isAuthenticated: true}),
    register: () => set({isAuthenticated: true}),
    logout: () => set({isAuthenticated: false})
});

const useAuthStore = create<IAuthStore>()(
    persist(authStore, {
        name: 'isAuthenticated',
        storage: createJSONStorage(() => localStorage),
    })
);


export const useIsAuth = () => useAuthStore((state) => state.isAuthenticated);
export const useLogin = () => useAuthStore.getState().login;
export const useRegister = () => useAuthStore.getState().register;
export const useLogout = () => useAuthStore.getState().logout;


