// First he import React, as well as the `useRef` hook.
import React, { useRef } from 'react';

// Then we define our Form component. Since we expect
// to receive a prop of `onSubmit`, we destucture the
// props object to access it.
const Form = ({ onSubmit }) => {
  // This component is responsible for capturing and
  // extracting the user-supplied swatch info. To do
  // this, we define 3x variables using the `useRef`
  // hook. These variables will eventually store the
  // user-supplied red, green, and blue values.
  const rRef = useRef();
  const gRef = useRef();
  const bRef = useRef();

  // Then we define the function that will be invoked
  // when the user submit the form. This function will:
  // - prevent the form submission from refreshing the page;
  // - extract the red, green, and blue values from the form;
  // - invoke the `onSubmit` function with the swatch data.
  const handleSubmit = (event) => {
      event.preventDefault();

      const swatch = [
          Number(rRef.current.value),
          Number(gRef.current.value),
          Number(bRef.current.value),
      ];

      onSubmit(swatch);
  };

  // Then we render the form itself. We bind the
  // `handleSubmit` function to the 'submit' event
  // using the `onSubmit` event handler. We also
  // bind our reference variables (defined above)
  // to the form's input elements. This allows
  // us to access their contents at form submission
  // time.
  return (
    <form onSubmit={handleSubmit}>
        <input ref={rRef} type="number" />
        <input ref={gRef} type="number" />
        <input ref={bRef} type="number" />
        <button>Add Color!</button>
    </form>
  );
};

// Since we need to use the Form within the Palette
// component, we export it here.
export default Form;
