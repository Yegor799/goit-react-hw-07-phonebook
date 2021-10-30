
import { createAction } from '@reduxjs/toolkit';

export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactError = createAction('contacts/deleteContactError');

export const filterContacts = createAction('contacts/filterContacts');
