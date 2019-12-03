const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.message;
    case 'CLEAR_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        message,
      },
    });

    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION', })
    }, seconds);
  };
};

export default reducer;
