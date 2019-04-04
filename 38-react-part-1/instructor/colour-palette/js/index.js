// Include useState (hooks) as part of this project
const { useState } = React;


// COMPONENT: Channel
// ARGUMENTS: Pro for the channel value, Number: rgb
//            Callback that takes a channel value, function: handleOnChange()
// Buttons to increase/decrease the channel value, and input for direct access to it. Calls back to the Swatch it was crated in using the function (setter) assigned to handleOnChange
const Channel = ({rgb, handleOnChange}) => {

  // Proof that this is re-rendering with each state change (in Swatch)!
  console.log(`Channel: ${rgb}`)

  // Checks that the value attemping to update the channel is an integer Number and is between 0 and 255, inclusive
  const updateRgb = ( val ) => {
    // If it passes the tests, callback to the state setter functions passed down from Swatch (stored in handleOnChange) with the new value 
    if (Number.isInteger(parseInt(val)) && (255 < val == val < 0))
      handleOnChange(parseInt(val));
  }

  // Render
  return (
    <div className="channel">
      <button type="button" className="btn up"   onClick= { () => updateRgb(rgb + 1) }>+</button>
      <input type="text" className="txt"         onChange={ ({target}) => updateRgb(target.value) } value={rgb} />
      <button type="button" className="btn down" onClick= { () => updateRgb(rgb - 1) }>-</button>
    </div>
  );
};


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


// COMPONENT: Palette
// Arguments: none
// An unordered list of swatches
const Palette = () => {

  // Render
  return (
    <ul className="palette">
      <Swatch red={255} green={0} blue={255} />
      <Swatch red={255} green={255} blue={0} />
      <Swatch red={0} green={255} blue={255} />
    </ul>
  );
};


// Render out <Palette> component to the document's #app element
ReactDOM.render(<Palette />, document.getElementById('app'));