import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as actions from './contacts-actions'


axios.defaults.baseURL = 'http://localhost:3001';


export const addContact = (name, number) => dispatch => {

    const contact = {
        name,
        number,
        id: uuidv4(),
    }

    dispatch(actions.addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)))

};

export const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error)))
};