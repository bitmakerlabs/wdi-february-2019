import React from 'react';

const ListItem = ({ item }) => {
  const { name, type, quantity } = item;

  return (
    <li className={ type }>
      <button>-</button>
      <span>{quantity} {name}</span>
      <button>+</button>
    </li>
  );
};

export default ListItem;
