import { useState, useEffect } from 'react';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = items => {
    const searchContact = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(items.name.toLowerCase());

    if (searchContact) {
      alert(`${items.name} is already in conacts`);
    } else {
      setContacts([...contacts, { id: shortid.generate(), ...items }]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm onAddContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <PhonebookList
        visibleContacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
