import deepFreeze from 'deep-freeze';
import notificationReducer from './notificationReducer';

describe('Notification Reducer', () => {
  const initialState = null;

  test('should return correct initial state', () => {
    const action = {
      type: 'DO_NOTHING',
    };

    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('should return new notification message', () => {
    const state = [];
    const action = {
      type: 'SET_NOTIFICATION',
      data: {
        message: 'Some notification',
      },
    };

    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(newState).toEqual(action.data.message);
  });

  test('should set notification to null', () => {
    const state = 'Some notification';
    const action = {
      type: 'CLEAR_NOTIFICATION',
    };

    deepFreeze(state);
    const newState = notificationReducer(state, action);
    expect(newState).toEqual(initialState);
  });
});
