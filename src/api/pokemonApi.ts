import axios from "axios";

import { getEnvVariables } from "../helpers";

const { POKEMON_API_URL } = getEnvVariables()

const pokemonApi = axios.create({
    baseURL: POKEMON_API_URL
});

interface ConfigInterface { 
    headers: { [x: string]: string; }; 
};

pokemonApi.interceptors.request.use( config => {

    async(config: ConfigInterface) => {
        const token = await localStorage.getItem("jsa-token")
        if ( token ) {
            config.headers["token"] = token;
        }
        return config;
    }

    return config;
})

export default pokemonApi;



