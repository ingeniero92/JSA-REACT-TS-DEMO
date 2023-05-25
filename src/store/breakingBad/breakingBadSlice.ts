import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Quote, BreakingBadState } from "../../interfaces";
import { loadBreakingBadQuote } from ".";

const QuoteBase: Quote = {
    quote: "",
    author: ""
};

const initialState: BreakingBadState = {
    quote: QuoteBase,
    isLoading: false,
    error: ""
}

export const breakingBadSlice = createSlice({
    name: "breakingBad",
    initialState,
    reducers: {
        onLoadQuote: ( state: BreakingBadState, action: PayloadAction<Quote> ) => {
            state.quote = action.payload;          
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadBreakingBadQuote.pending, ( state: BreakingBadState ) => {
            state.isLoading = true;
        })
        builder.addCase(loadBreakingBadQuote.fulfilled, ( state: BreakingBadState, { payload }: PayloadAction<Quote> ) => {
            state.isLoading = false
            state.quote = payload
        })
        builder.addCase(loadBreakingBadQuote.rejected, ( state: BreakingBadState ) => {
            state.isLoading = false
            state.error = "Error"
        })
    },
});

export const { onLoadQuote } = breakingBadSlice.actions;