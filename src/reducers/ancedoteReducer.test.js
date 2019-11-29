import deepFreeze from 'deep-freeze';
import anecdotesReducer from './anecdoteReducer';

describe('anecdotes reducer', () => {
  const initialStateWithRandomId = [
    {
      content: 'If it hurts, do it more often',
      id: expect.any(String),
      votes: 0,
    },
    {
      content: 'Adding manpower to a late software project makes it later!',
      id: expect.any(String),
      votes: 0,
    },
    {
      content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      id: expect.any(String),
      votes: 0,
    },
    {
      content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      id: expect.any(String),
      votes: 0,
    },
    {
      content: 'Premature optimization is the root of all evil.',
      id: expect.any(String),
      votes: 0,
    },
    {
      content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      id: expect.any(String),
      votes: 0,
    },
  ];

  test('should return correct initial state', () => {
    const state = [];
    const action = {
      type: 'DO_NOTHING',
    };

    const newState = anecdotesReducer(undefined, action);
    expect(newState).toEqual(initialStateWithRandomId);
  });

  test('should add a new anecdotes', () => {
    const state = [];
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'Some new anecdotes',
        id: '1',
        votes: 0,
      },
    };

    deepFreeze(state);
    const newState = anecdotesReducer(state, action);

    expect(newState.length).toBe(1);
    expect(newState).toContainEqual(action.data);
  });

  test('should add 1 vote', () => {
    const state = [
      {
        content: 'If it hurts, do it more often',
        id: '1',
        votes: 0,
      },
      {
        content: 'Adding manpower to a late software project makes it later!',
        id: '2',
        votes: 0,
      },
    ];

    const action = {
      type: 'VOTE',
      data: {
        id: '2',
      },
    };

    deepFreeze(state);
    const newState = anecdotesReducer(state, action);

    expect(newState.length).toBe(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      content: 'Adding manpower to a late software project makes it later!',
      id: '2',
      votes: 1,
    });
  });
});
