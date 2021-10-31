import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as actions from './contacts-actions'


axios.defaults.baseURL = 'http://localhost:3001';


export const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts')
        dispatch(actions.fetchContactSuccess(data))
    } catch (error) {
        dispatch(actions.fetchContactError(error))
    }

};

export const addContact = (name, number) => async dispatch => {

    const contact = {
        name,
        number,
        id: uuidv4(),
    }

    dispatch(actions.addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(actions.addContactSuccess(data))
    } catch (error) {
        dispatch(actions.addContactError(error))
    }

};

export const deleteContact = contactId => async dispatch => {
    dispatch(actions.deleteContactRequest());

    try {
        const { data } = await axios.delete(`/contacts/${contactId}`)
        dispatch(actions.deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(actions.deleteContactError(error))
    }

};