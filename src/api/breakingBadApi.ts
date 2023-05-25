import { getEnvVariables } from "../helpers";

const { BREAKINGBADQUOTES_API_URL } = getEnvVariables()

export const getQuote = async () => {
    const resp = await fetch(BREAKINGBADQUOTES_API_URL);
    return await resp.json();
}