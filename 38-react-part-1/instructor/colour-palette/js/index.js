// Include useState (hooks) as part of this project
const { useState } = React;

const Channel = ({rgb}) => {

  return (
    <div className="channel">
      <button type="button" className="btn up">+</button>
      <input type="text" className="txt" value={rgb} />
      <button type="button" className="btn down">-</button>
    </div>
  );
};

const Swatch = (props) => {

  let r = props.red;
  let g = props.green;
  let b = props.blue;

  const styles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  return (
    <li className="swatch" style={styles}>
      <div>rgb(</div>
      <Channel rgb={r} />
      <Channel rgb={g} />
      <Channel rgb={b} />
      <div>);</div>
    </li>
  );
};


const Palette = () => {

    return (
      <ul className="palette">
        <Swatch red={255} green={0} blue={255} />
        <Swatch red={255} green={255} blue={0} />
        <Swatch red={0} green={255} blue={255} />
      </ul>
    );

};

ReactDOM.render(<Palette />, document.getElementById('app'));