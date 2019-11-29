import React from 'react';
import { createAncedote } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.store.dispatch(createAncedote(content));
  };

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
