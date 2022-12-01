import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import initialData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {

  const clearAll = () => {
    setProviderValue((prevState) => ({ ...prevState, todos: [], todosCount: 0 }));
  };

  const deleteById = (id, todos) => {
    const elementIndex = todos.findIndex((todoItem) => todoItem.id === id);

    todos.splice(elementIndex, 1);

    setProviderValue((prevState) => ({
      ...prevState,
      todos: todos,
      todosCount: todos.length
    }));
  };

  const createNewTodo = (itemText, todos) => {
    todos.push({
      text: itemText,
      isCompleted: false,
      id: uuidv4()
    });

    setProviderValue((prevState) => ({
      ...prevState,
      todos: todos,
      todosCount: todos.length
    }));
  };

  const handleComplete = (id, todos) => {
    const elementIndex = todos.findIndex((todoItem) => todoItem.id === id);

    todos[elementIndex].isCompleted = !todos[elementIndex].isCompleted;

    setProviderValue((prevState) => ({
      ...prevState,
      todos: todos,
    }));
  };

  const [providerValue, setProviderValue] = useState({
    todos: initialData,
    todosCount: initialData.length,
    actions: { clearAll, deleteById, createNewTodo, handleComplete },
  });

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};

export const useTodos = () => useContext(Context);

export default Context;
