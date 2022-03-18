import React from 'react';
import s from './PhonebookItem.module.css';

const PhonebookItem = ({ contact, deleteContact }) => {
  return (
    <li className={s.contact}>
      {contact.name}: {contact.number}{' '}
      <button
        type="button"
        className={s.delete}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
export default PhonebookItem;
