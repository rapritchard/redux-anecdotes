import React from 'react';
import { voteAncedote } from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, handleClick }) => (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button type="button" onClick={handleClick}>vote</button>
      </div>
    </div>
);

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().ancedotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (anecdote) => {
    store.dispatch(voteAncedote(anecdote.id));

    store.dispatch(setNotification(`You voted '${anecdote.content}'`));

    setTimeout(() => {
      store.dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote)} />)}
    </div>
  );
};

export default AnecdoteList;
