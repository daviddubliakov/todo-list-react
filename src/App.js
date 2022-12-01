import React from "react";

import Header from './components/header';
import List from './components/list.js';

import { AppContextProvider } from "./context";

import styles from './App.module.css';

const AppView = () => (
  <AppContextProvider>
    <div className={styles.container}>
      <Header />
      <List />
    </div>
  </AppContextProvider>
);
export default AppView;
