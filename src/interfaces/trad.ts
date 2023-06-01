import ES from "../data/ES.json";
import EN from "../data/EN.json";

export const ES_TRAD = ES;
export const EN_TRAD = EN;

export enum languages {
    ES = "es",
    EN = "en"
}

export type TradType = keyof typeof ES;