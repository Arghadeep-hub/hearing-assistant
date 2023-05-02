import React from 'react';

const ClearButton = ({ disabled, onClick }) => (
  <button className="btn clear" disabled={disabled} onClick={onClick}>
    Clear
  </button>
);

export default ClearButton;