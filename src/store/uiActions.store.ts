//@ts-nocheck
import { create } from 'zustand';

const useUiActions = create((set) => ({
    blured: false,
    setBlured: (value) => set({ blured: value }),
}));

export default useUiActions;
