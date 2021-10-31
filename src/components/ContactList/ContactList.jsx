import "./ContactList.css";
import { connect } from "react-redux";
import * as contactsOperations from "../../redux/contacts/contacts-operations";
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function ContactList({ names, onDelete, fetchContacts, isLoading }) {

useEffect(() => {
    fetchContacts()    
}, [])

    return (
<>        
        <ul className="ContactList">
            {names.map(contact => {
                return (
                    <li key={contact.id} className="ContactList__item">
                        <p>{contact.name}: {contact.number}</p>
                        <button onClick={() => onDelete(contact.id)}>Delete</button>
                    </li>
                )
            })}
            </ul>

            {isLoading && <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} />
            }
</>
    )
}

const mapStateToProps = state => {

  const { filter, items } = state.contacts;
  const filteredNames = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return {
        names: filteredNames,
        isLoading: state.contacts.loading,
    }
};

const mapDispatchToProps = dispatch => ({
    onDelete: contactID => dispatch(contactsOperations.deleteContact(contactID)),
    fetchContacts: ()=> dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);