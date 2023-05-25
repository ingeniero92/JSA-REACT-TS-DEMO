import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkMiddlewareReturn } from "../../interfaces";
import { getQuote } from "../../api/"
import { AppDispatch, RootState } from "../store";
import { onLoadQuote } from "./";

// Two ways: createAsyncThunk() or Manual Async Thunk middleware with dispatch()

export const loadBreakingBadQuote = createAsyncThunk(
    "breakingBad/loadQuote",
    async ( _: void ) => { // ( arg: any, thunkAPI )
        const response = await getQuote();
        return response[0];
    }
)

export const loadBreakingBadQuoteMiddleware = (): ThunkMiddlewareReturn => {

    return async( dispatch: AppDispatch, getState: () => RootState ): Promise<void> => {

        const { quote: lastQuote } = getState().breakingBad;

        const response = await getQuote();
        const quote = response[0];

        console.log( "Get Breaking Bad Quote: " + JSON.stringify( lastQuote ) );

        dispatch( onLoadQuote( quote ) );

    }

}