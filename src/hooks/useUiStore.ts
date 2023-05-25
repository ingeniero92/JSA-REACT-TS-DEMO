import type { TradType } from "../interfaces";
import { languages, ES_TRAD, EN_TRAD } from "../interfaces";
import { onChangeLang, onChangeLangToES, onChangeLangToEN } from "../store";
import { useAppSelector, useAppDispatch } from "./";

const { ES, EN } = languages;

export const useUiStore = () => {

    const { lang } = useAppSelector( (state) => state.ui );
    const dispatch = useAppDispatch();

    const startChangeLanguage = () => {
        dispatch( onChangeLang() );
    }

    const startChangeLangToES = () => {
        dispatch( onChangeLangToES() );
    }

    const startChangeLangToEN = () => {
        dispatch( onChangeLangToEN() );
    }

    const t = (trad: TradType): string => {
        switch(lang){
            case ES:
                return ES_TRAD[trad] ? ES_TRAD[trad] : "**" + trad + "**";
            case EN:
                return EN_TRAD[trad] ? EN_TRAD[trad] : "**" + trad + "**";
            default:
                return "**ERROR IN TRAD**"
        }      
    }

    return {
        lang,
        t,
        startChangeLanguage,
        startChangeLangToES,
        startChangeLangToEN
    }
}
