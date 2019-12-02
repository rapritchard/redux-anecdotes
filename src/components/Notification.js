import React from 'react';
import { connect } from 'react-redux';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  const message = props.notification;
  if (!message) {
    return null;
  }

  return (
    <div style={style}>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Notification);
