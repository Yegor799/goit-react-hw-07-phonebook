import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContactSuccess, addContactRequest, addContactError, deleteContactRequest, deleteContactError, deleteContactSuccess, filterContacts } from './contacts-actions';




const initialContactsState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const items = createReducer(initialContactsState, {
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




// const itemsReducer = (state = initialContactsState, { type, payload }) => {
//     switch (type) {
//         case 'contacts/addContact':
//             return [...state, payload];

//         case 'contacts/deleteContact':
//             return state.filter(({ id }) => id !== payload);

//         default:
//             return state;

//     }
// };



// switch (type) {
//     case 'contacts/filterContacts':
//         return payload;

//     default:
//         return state;
// }