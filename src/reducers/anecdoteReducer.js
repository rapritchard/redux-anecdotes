import anecdoteService from '../services/anecdotes';

export const getId = () => (100000 * Math.random()).toFixed(0);

// const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = [], action) => {
  // console.log('state now: ', state);
  // console.log('action', action);
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'VOTE': {
      const { id } = action.data;
      const ancedoteToChange = state.find((a) => a.id === id);
      const changedAncedote = {
        ...ancedoteToChange,
        votes: ancedoteToChange.votes + 1,
      };
      return state.map((ancedote) => (ancedote.id !== id ? ancedote : changedAncedote));
    }
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export const createAncedote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    });
  };
};

export const voteAncedote = (anecdote) => {
  return async (dispatch) => {
    const changedAncedote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const updatedAncedote = await anecdoteService.update(changedAncedote.id, changedAncedote);
    dispatch({
      type: 'VOTE',
      data: updatedAncedote,
    });
  };

};

export default reducer;
