import React from 'react';
import { voteAncedote } from '../reducers/anecdoteReducer';

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
  const anecdotes = store.getState().sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {anecdotes.map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => store.dispatch(voteAncedote(anecdote.id))} />)}
    </div>
  );
};

export default AnecdoteList;
