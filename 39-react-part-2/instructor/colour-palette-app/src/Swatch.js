import React, { useState, useEffect } from 'react';
import Channel from './Channel';

// COMPONENT: Swatch
// ARGUMENTS: Prop for each channel, Numbers: red, green, blue
// Maintains the state of our colour swatches (for now), showing the colour as the background of the <li> and creating a single Channel component for each RGB decimal value
const Swatch = ({red, green, blue, onRemove}) => {
  // Define three state variables: r, g, b
  let [r, setR] = useState(red);
  let [g, setG] = useState(green);
  let [b, setB] = useState(blue);

  // Then we set up our `useEffect` hook,
  // which will be called whenever our component
  // is rendered.
  //
  // In this case, we define a callback function
  // that will invoke the `setR`, `setG`, and
  // `setB` methods whenever any of the `red`,
  // `green`, `blue` paramaters change.
  //
  // Since the `useState` hook allows values to
  // persist even as a component is rendered
  // over and over again, the `useEffect`
  // hook is required to ensure that those values
  // are correctly updated when new swatches are
  // added or removed.
  useEffect(() => {
    setR(red);
    setG(green);
    setB(blue);
  }, [red, green, blue]);

  // Proof that this is re-rendering with each state change!
  console.log(`Swatch: rgb(${r}, ${g}, ${b})`);

  // A Object holding the element's style properties
  const styles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  // Render
  return (
    <li className="swatch" style={styles}>
      <div className="swatch-controls">
        <div>rgb(</div>
        <Channel rgb={r} handleOnChange={setR} />
        <Channel rgb={g} handleOnChange={setG} />
        <Channel rgb={b} handleOnChange={setB} />
        <div>);</div>
      </div>
      <button className="swatch-cta" onClick={ onRemove }>Remove</button>
    </li>
  );
};

export default Swatch;
