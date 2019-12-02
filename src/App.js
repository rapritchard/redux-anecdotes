import React from 'react';
import Notification from './components/Notification';
import Filter from './components/Filter';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';

const App = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification store={props.store} />
      <Filter store={props.store} />
      <AnecdoteForm store={props.store} />
      <AnecdoteList store={props.store} />
    </div>
  );
};

export default App;
