import { useState } from 'react';
import s from './PhonebookForm.module.css';
import PropTypes from 'prop-types';

export default function PhonebookForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    // if (name === 'name') {
    //   setName(value);
    // }
    // if (name === "number") {
    //   setNumber(value);
    // }
  };

  const addContact = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addContact} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.addContact}>
        Add contact
      </button>
    </form>
  );
}

PhonebookForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
