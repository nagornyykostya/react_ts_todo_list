import React from 'react';
import ToDoList from './tasks/components/ToDoList.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
