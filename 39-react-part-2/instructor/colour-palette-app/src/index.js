import React from 'react';
import ReactDOM from 'react-dom';

// Here we import the Palette component from the 'App.js' file...
import Palette from './App';

// ...then we render it and inejct the result in the DOM node with the ID of 'app'.
ReactDOM.render(<Palette />, document.getElementById('app'));
