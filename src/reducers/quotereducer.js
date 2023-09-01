import { combineReducers } from "redux"
import { FETCH_QUOTE, UPDATE_QUOTE } from "../actions/quoteActions"

const initialState = {
    quoteText: '',
    author: ''
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE:
            return state
        case UPDATE_QUOTE:
            const { quoteText, author } = action.payload
            return {
                ...state,
                quoteText,
                author
            }
        default: 
            return state;
    }
}

export {quoteReducer}