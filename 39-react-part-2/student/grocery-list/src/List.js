import React from 'react';
import ListItem from './ListItem';

const List = ({ items }) => {
  const itemElements = items.map((item, i) => <ListItem key={i} item={ item } />);

  return (
    <ul id="shoppingList" className="shoppinglist">
      { itemElements }
    </ul>
  );
};

export default List;
