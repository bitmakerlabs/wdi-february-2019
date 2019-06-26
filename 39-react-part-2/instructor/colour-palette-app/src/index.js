import React from 'react';
import ReactDOM from 'react-dom';

// Here we import the App component from the 'App.js' file...
import App from './App';

// ...then we render it and inejct the result in the DOM node with the ID of 'app'.
ReactDOM.render(<App />, document.getElementById('app'));
