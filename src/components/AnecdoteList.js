import React from 'react';
import { connect } from 'react-redux';
import { voteAncedote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, handleClick }) => (
  <div>
    <div>
        {anecdote.content}
      </div>
    <div>
      has {anecdote.votes} <button type="button" onClick={handleClick}>Vote</button>
    </div>
  </div>
);

const AnecdoteList = (props) => {
  const handleVote = (anecdote) => {
    props.voteAncedote(anecdote);

    props.setNotification(`You voted '${anecdote.content}'`, 5000);
  };

  return (
    <div>
      {props.anecdotesToShow.map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote)} />)}
    </div>
  );
};

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (!filter) {
    return anecdotes.sort((a, b) => b.votes - a.votes);
  }
  return anecdotes.filter((a) => a.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    .sort((a, b) => b.votes - a.votes);
};

const mapStateToProps = (state) => ({
  anecdotesToShow: anecdotesToShow(state),
});

const mapDispatchToProps = {
  voteAncedote,
  setNotification,
};

const ConnectedAnecdote = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
export default ConnectedAnecdote;
