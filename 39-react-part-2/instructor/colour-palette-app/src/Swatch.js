import React, { useState } from 'react';
import Channel from './Channel';

// COMPONENT: Swatch
// ARGUMENTS: Prop for each channel, Numbers: red, green, blue
// Maintains the state of our colour swatches (for now), showing the colour as the background of the <li> and creating a single Channel component for each RGB decimal value
const Swatch = ({red, green, blue}) => {

  // Define three state variables: r, g, b
  let [r, setR] = useState(red);
  let [g, setG] = useState(green);
  let [b, setB] = useState(blue);

  // Proof that this is re-rendering with each state change!
  console.log(`Swatch: rgb(${r}, ${g}, ${b})`);

  // A Object holding the element's style properties
  const styles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  // Render
  return (
    <li className="swatch" style={styles}>
      <div>rgb(</div>
      <Channel rgb={r} handleOnChange={setR} />
      <Channel rgb={g} handleOnChange={setG} />
      <Channel rgb={b} handleOnChange={setB} />
      <div>);</div>
    </li>
  );
};

export default Swatch;
