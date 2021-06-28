import create from "zustand";

export const useStorePokemon = create((set) => ({
    filter: '',
    pokemon: [],

    setFilter: (filter) => set(() => ({ filter })),
    setPokemon: (pokemon) => set(() => ({ pokemon })),
}))

export const useStoreBear = create((set) => ({
    bears: 0,

    AddBear: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 })
}))
