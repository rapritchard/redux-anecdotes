import React from 'react';
import { get } from 'http';

const getId = () => (100000 * Math.random()).toFixed(0);

const App = (props) => {
  const anecdotes = props.store.getState();

  const vote = (id) => {
    props.store.dispatch({
      type: 'VOTE',
      data: {
        id,
      },
    });
  };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    props.store.dispatch({
      type: 'NEW_ANCEDOTE',
      data: {
        content,
        id: getId(),
        votes: 0,
      },
    });
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
