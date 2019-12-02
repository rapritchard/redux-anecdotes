export const setNotification = (message) => ({
  type: 'SET_NOTIFICATION',
  data: {
    message,
  },
});

export const clearNotification = () => ({
  type: 'CLEAR_NOTIFICATION',
});

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

export default reducer;
