import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Pokemon, PokemonState } from "../../interfaces";

const PokemonBase: Pokemon = {
    id: 0,
    name: "",
    sprites: {
        front_default: "",
        back_default: ""
    }
};

const initialState: PokemonState = {
    pokemon: PokemonBase,
    isLoading: true,
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        onStartLoadPokemon: ( state ) => {
            state.isLoading = true;
        },
        onLoadPokemon: ( state, action: PayloadAction<Pokemon> ) => {
            state.pokemon = action.payload;       
            state.isLoading = false; 
        },
    }
});

export const { onLoadPokemon, onStartLoadPokemon } = pokemonSlice.actions;