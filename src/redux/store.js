import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";


const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState())


export default store;