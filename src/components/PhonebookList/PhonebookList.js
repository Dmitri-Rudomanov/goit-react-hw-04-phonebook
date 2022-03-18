import React from 'react';
import PhonebookItem from '../PhonebookItem/PhonebookItem.js';
import s from './PhonebookList.module.css';

const PhonebookList = ({ visibleContacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {visibleContacts.map(contact => (
        <PhonebookItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default PhonebookList;
