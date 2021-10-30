import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001';

const fetchContacts = () => {
    return axios.get('/contacts').then(({ data }) => data);
};

const addContact = contact => {
    return axios.post('/contacts', contact).then(({ data }) => data);
};

const deleteContact = contactId => {
    return axios.delete(`/contacts/${contactId}`);
};

export default { fetchContacts, addContact, deleteContact };

