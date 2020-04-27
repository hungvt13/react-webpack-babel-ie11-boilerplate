import React from 'react';
import PropTypes from 'prop-types';

function User({id, name}) {
    return (
      <div style={{display: 'flex'}}>
        <p>{id}-</p>
        <p>{name}</p>
      </div>
    );
}

User.propTypes  = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default User;