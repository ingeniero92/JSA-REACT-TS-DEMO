import { EnvironmentVariables } from "../interfaces";

export const getEnvVariables = (): EnvironmentVariables => {
    return {        
        APP_TITLE: import.meta.env.VITE_APP_TITLE,
        POKEMON_API_URL: import.meta.env.VITE_POKEMON_API_URL,
        BREAKINGBADQUOTES_API_URL: import.meta.env.VITE_BREAKINGBADQUOTES_API_URL,
        APP_VERSION: import.meta.env.VITE_APP_VERSION,
    }
}