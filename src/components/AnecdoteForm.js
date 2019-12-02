import React from 'react';
import { createAncedote } from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.store.dispatch(createAncedote(content));
    props.store.dispatch(setNotification(`New anecdote '${content}' created`));

    setTimeout(() => {
      props.store.dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
