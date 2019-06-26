// Although React is not explicitly referenced within this file,
// we must import it so that `create-react-app` is able to
// transpile our JSX into the 'vanilla' JavaScript equivalent.
// We also import `useState`, since it is used to make our
// application data 'stateful'.
import React, { useState } from 'react';

// Since the Swatch and Form components are defined in separate files,
// we import them here so that we can use them within the Palette.
import Swatch from './Swatch';
import Form from './Form';

// COMPONENT: Palette
// Arguments: none
// An unordered list of swatches
const Palette = () => {

  // Here we define the data that our application will display.
  // Since our application has been designed to render swatches,
  // and each swatch is made of of 3x values, we've opted to
  // represent the data as an 'array of arrays'.
  const initialSwatches = [
      [255, 0, 255],
      [255, 255, 0],
      [0, 255, 255],
  ];

  // After we define our initial data, we make it 'stateful'
  // using the `useState` hook. `useState` returns an array
  // which we destructure into `swatches` and `setSwatches`.
  // The `swatches` variable contains the current state of
  // the application, and the `setSwatches` variable contains
  // a function that we can use to update the application state.
  const [swatches, setSwatches] = useState(initialSwatches);

  // Then we define a function that will be used to remove
  // individual swatches using `setSwatches`.
  //
  // `removeSwatch` expects to be invoked with an integer,
  // `index`, which represents the position of the target
  // swatch within the array.
  const removeSwatch = (index) => {
    setSwatches((currentSwatches) => currentSwatches.filter((_, i) => i !== index));
  };

  // Since we want our view to be 'data driven', we iterate
  // over the `swatches` array and return 1x Swatch component
  // for each item. We capture the resulting array of
  // components in the `swatchElements` variable.
  //
  // Notice that we're passing our red, green, and blue values
  // into the component using the corresponding props. We're
  // also allowing each swatch to invoke the `removeSwatch`
  // method by passing in an arrow function under the `onRemove`
  // prop.
  const swatchElements = swatches.map((rgb, i) => <Swatch key={i} red={rgb[0]} green={rgb[1]} blue={rgb[2]} onRemove={ () => removeSwatch(i) } />);

  // Then we define a function that will be used to add new,
  // user-supplied functions. This function will be invoked with
  // an array of swatch data (ie. `[0, 255, 100]`), which will
  // then be added to the existing swatches using the `setSwatches`
  // function defined above.
  const addSwatch = (swatch) => {
      setSwatches((currentSwatches) => [...currentSwatches, swatch]);
  };

  // Finally, we return the markup that represents this component.
  // Our Palette is made up of a list of swatches, as well as
  // form that is used to add new swatches. However, React
  // components may only return 1x DOM node. To get around this
  // limitation, we wrap our list of swatches and form in a
  // <section> tag.
  return (
    <section>
      <ul className="palette">
        { swatchElements }
      </ul>
      <Form onSubmit={ addSwatch } />
    </section>
  );
};

// Since the Palette will be used by other files within our
// application, we expose it as the default export.
export default Palette;
