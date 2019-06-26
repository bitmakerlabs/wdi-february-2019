// Although React is not explicitly referenced within this file,
// we must import it so that `create-react-app` is able to
// transpile our JSX into the 'vanilla' JavaScript equivalent.
// We also import `useState`, since it is used to make our
// application data 'stateful'.
import React, { useState } from 'react';

// Since the Palette component is defined in a separate file,
// we import it here so that we can use it within the App.
import Palette from './Palette';

// COMPONENT: App
// Arguments: none
const App = () => {
  // Here we define the data that our application will display.
  // Since our application has been designed to render palettes,
  // each of which renders several swatches, we've opted to
  // represent the data as a three dimensional array (ie. 'an
  // 'array of arrays of arrays').
  //
  // The `initialPalettes` variable contains an array whose
  // members are inidividual 'palettes'. Each 'palette' array
  // contains 3x arrays, each of which represents a 'swatch'.
  // Each swatch contains 3x numeric values, each of which
  // represents a single color channel.
  const initialPalettes = [
    [[255, 0, 255], [255, 255, 0], [0, 255, 255]],
  ];

  // After we define our initial data, we make it 'stateful'
  // using the `useState` hook. `useState` returns an array
  // which we destructure into `palettes` and `setPalettes`.
  // The `palettes` variable contains the current state of
  // the application, and the `setPalettes` variable contains
  // a function that we can use to update the application state.
  const [palettes, setPalettes] = useState(initialPalettes);

  const addPalette = () => {
    setPalettes((currentPalettes) => [...currentPalettes, []])
  };

  // Since we want our view to be 'data driven', we iterate
  // over the `palettes` array and return 1x Palette component
  // for each item. We capture the resulting array of
  // components in the `paletteElems` variable.
  //
  // Notice that we're passing 1x `palette` array into each
  // Palette component. This means that each Palette component
  // instance is responsible for displaying 1x collection
  // of swatches.
  const paletteElems = palettes.map((palette, i) => <Palette key={i} palette={palette} />)

  // Finally, we return the markup that represents this component.
  // Our application is made up of a list of palettes, as well as
  // button that is used to add new palettes. However, React
  // components may only return 1x DOM node. To get around this
  // limitation, we wrap our list of swatches and form in a
  // <div> tag.
  return (
    <div>
      <header>
        <button onClick={ addPalette }>Add Palette</button>
      </header>
      <section className="palettes">
        { paletteElems }
      </section>
    </div>
  );
};

// Since the App will be used by other files within our
// application, we expose it as the default export.
export default App;
