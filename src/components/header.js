/* eslint import/no-anonymous-default-export: 0 */
import React, { useContext } from "react";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import AppContext from "../context";

import styles from './header.module.css';

const Header = () => {
  const { actions, todosCount } = useContext(AppContext);

  const openConfirmPopup = () => {
    Confirm.show(
      'Confirmation',
      'Are you sure want to delete all todos?',
      'Yes',
      'No',
      actions.clearAll
    );
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To do App</h1>
      <span>Total Items {todosCount}</span>
      <button onClick={openConfirmPopup}>
        Clear All
      </button>
    </header>
  );
};

export default Header;
