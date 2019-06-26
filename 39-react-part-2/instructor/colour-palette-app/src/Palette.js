import React, { useState } from 'react';
import Form from './Form';
import Swatch from './Swatch';

// COMPONENT: Palette
// ARGUMENTS: Prop for the target palette.
const Palette = ({ palette }) => {
  // Like our App component, we use the `setState`
  // hook to make our data 'stateful'. In this case,
  // we invoke `useState`, passing in the `palette`
  // prop, and receiving the `swatches` array and
  // `setSwatches` function.
  const [swatches, setSwatches] = useState(palette);

  // Then we define a function that will be used to remove
  // individual swatches using `setSwatches`.
  //
  // `removeSwatch` expects to be invoked with an integer,
  // `index`, which represents the position of the target
  // swatch within the array.
  const removeSwatch = (index) => {
    setSwatches((currentSwatches) => currentSwatches.filter((_, i) => i !== index));
  };

  // Again, we iterate over our `swatches` data to generate
  // 1x Swatch component for each collection of red, green,
  // and blue values.
  // 
  // Notice that we're passing our red, green, and blue values
  // into the component using the corresponding props. We're
  // also allowing each swatch to invoke the `removeSwatch`
  // method by passing in an arrow function under the `onRemove`
  // prop.
  const swatchElements = swatches.map((rgb, i) => <Swatch key={i} red={rgb[0]} green={rgb[1]} blue={rgb[2]} onRemove={ () => removeSwatch(i) } />);

  // Then we define a function that will be used to add new,
  // user-supplied swatches. This function will be invoked with
  // an array of swatch data (ie. `[0, 255, 100]`), which will
  // be added to the existing swatches using the `setSwatches`
  // function defined above.
  const addSwatch = (swatch) => {
      setSwatches((currentSwatches) => [...currentSwatches, swatch]);
  };

  // Finally, we render our Swatch elements, as well as the
  // custom Form component that allows user to create new
  // swatches.
  return (
    <ul className="palette">
      { swatchElements }
      <Form onSubmit={ addSwatch } />
    </ul>
  );
};

export default Palette;
