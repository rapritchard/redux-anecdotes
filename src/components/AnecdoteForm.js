import React from 'react';
import { createAncedote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';
import { setNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.createAncedote(content);
    props.setNotification(`New anecdote '${content}' created`);

    setTimeout(() => {
      props.clearNotification();
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

export default connect(
  null,
  { createAncedote, setNotification, clearNotification}
)(AnecdoteForm);
