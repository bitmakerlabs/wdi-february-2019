import React from 'react';

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
    if (Number.isInteger(parseInt(val)) && val <= 255 && val >= 0)
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

export default Channel;
