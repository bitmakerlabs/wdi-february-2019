import React from 'react';
import ListItem from './ListItem';

const List = ({ items, incrementItem, decrementItem }) => {
  const itemElements = items.map((item, i) => (
    <ListItem
      key={i}
      item={item}
      onIncrementClick={() => incrementItem(i)}
      onDecrementClick={() => decrementItem(i)}
    />)
  );

  return (
    <ul id="shoppingList" className="shoppinglist">
      { itemElements }
    </ul>
  );
};

export default List;
