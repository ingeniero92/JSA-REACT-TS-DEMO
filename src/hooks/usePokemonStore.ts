import { useAppSelector, useAppDispatch } from ".";

import type { Pokemon } from "../interfaces";
import { onLoadPokemon, onStartLoadPokemon } from "../store";
import { pokemonApi } from "../api";

export const usePokemonStore = () => {
    
    const { pokemon, isLoading } = useAppSelector( state => state.pokemon );
    const dispatch = useAppDispatch();

    const loadPokemon = async( id: number ): Promise<void> => {
        try {
            dispatch( onStartLoadPokemon() );
            const resp = await pokemonApi.get<Pokemon>( `/pokemon/${ id }` );
            dispatch( onLoadPokemon(resp.data) );
        } catch (error) {
            console.log(error);
        }
    }

    return {
        pokemon,
        isLoading,
        loadPokemon
    }
}
