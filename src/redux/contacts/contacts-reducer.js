import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactError,
    deleteContactSuccess,
    filterContacts,
    fetchContactSuccess,
    fetchContactRequest,
    fetchContactError
} from './contacts-actions';


const items = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});




