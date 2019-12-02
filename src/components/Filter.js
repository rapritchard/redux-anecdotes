import React from 'react';

const Filter = ({ store }) => {
  const handleChange = (event) => {
    store.dispatch({
      type: 'SET_FILTER',
      data: {
        filter: event.target.value,
      },
    });
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
