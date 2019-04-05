import React from 'react';

const ListItem = ({ item, onIncrementClick, onDecrementClick }) => {
  const { name, type, quantity } = item;

  return (
    <li className={ type }>
      <button onClick={onDecrementClick}>-</button>
      <span>{quantity} {name}</span>
      <button onClick={onIncrementClick}>+</button>
    </li>
  );
};

export default ListItem;
