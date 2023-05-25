import { createSlice } from "@reduxjs/toolkit";

import { UiState, languages } from "../../interfaces";

const { ES, EN } = languages;

const initialState: UiState = {
    lang: ES
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        onChangeLang: ( state ) => {
            state.lang == ES ? state.lang = EN : state.lang = ES;        
        },
        onChangeLangToES: ( state ) => {
            state.lang = ES;   
        },
        onChangeLangToEN: ( state ) => {
            state.lang = EN;        
        },
    }
});

export const { onChangeLang, onChangeLangToES, onChangeLangToEN } = uiSlice.actions;