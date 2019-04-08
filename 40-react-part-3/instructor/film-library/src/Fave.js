import React from 'react';

const Fave = ({onFaveToggle}) => {
  const handleClick = (event) => {
    event.stopPropagation();
    console.log('Fave was clicked!');
    onFaveToggle();
  };

  return (
    <button className={`film-row-fave add_to_queue`} onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </button>
  );
};

export default Fave;
