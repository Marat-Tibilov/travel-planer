import { create } from 'zustand'
import {CityDetails} from "@/shared/types/api.interfaces";
import {createJSONStorage, persist} from "zustand/middleware";

interface IActions {
    setCity: (title: CityDetails) => void;
}

interface IInitialState {
    selectedCity: CityDetails | null;
}

const initialState: IInitialState = {
    selectedCity: null,
}

interface ITitleStore extends IInitialState, IActions {}

const useCityDetailStore = create<ITitleStore>()(
    persist((set) => ({
    ...initialState,
    setCity: (data: CityDetails ) => set({selectedCity: data}),
}),
        {
            name: 'cityDetails',
            storage: createJSONStorage( () => localStorage )
        }
    ),
)

export const useSelectedCity = () => useCityDetailStore((state) => state.selectedCity )
export const useSetCity = () => useCityDetailStore.getState().setCity
