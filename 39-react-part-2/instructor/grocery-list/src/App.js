import React, { useState } from 'react';
import Form from './Form';
import Filters from './Filters';
import List from './List';

const App = () => {
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Meat', value: 'meat' },
    { name: 'Produce', value: 'prod' },
    { name: 'Dairy', value: 'dairy' },
    { name: 'Bakery', value: 'bakery' },
  ];

  const initialItems = [
    { name: 'Steak', type: 'meat', quantity: 3 },
    { name: 'Apples', type: 'prod', quantity: 4 },
    { name: 'Milk (1L, 2%)', type: 'dairy', quantity: 1 },
    { name: 'Baguettes', type: 'bakery', quantity: 2 },
  ];
  const [items, setItems] = useState(initialItems);

  const incrementItemQuantity = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    setItems(updatedItems);
  };

  const decrementItemQuantity = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    setItems(updatedItems);
  };

  return (
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>
      <Form />
      <Filters filters={filters}/>
      <List
        items={items}
        incrementItem={incrementItemQuantity}
        decrementItem={decrementItemQuantity}
      />
    </main>
  );
};

export default App;
