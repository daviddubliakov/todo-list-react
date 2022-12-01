import { useState } from 'react';

import { useTodos } from '../context';

import styles from './form.module.css'

const Form = () => {
  const { actions, todos } = useTodos();

  const [newItem, setNewItem] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    actions.createNewTodo(newItem, todos);
    setNewItem('');
  };

  const handleChange = e => {
    setNewItem(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="newItem" className={styles.label}>New Item</label>
      <input
        id="newItem"
        name="newItem"
        type="text"
        className={styles.input}
        value={newItem}
        onChange={handleChange}
      />
      <button type="submit" disabled={newItem === ''}>Add</button>
    </form>
  );
}

export default Form;
