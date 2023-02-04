import React, { useState } from "react";

const Form = ({ setGridSize, setGridSet }) => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const handleHeight = (e) => {
    setHeight(Number(e.target.value));
  };
  const handleWidth = (e) => {
    setWidth(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGridSize({ height: height, width: width });
    setGridSet(false);
  };

  return (
    <article className="dimensions-form">
      <h2>Please Choose Dimensions</h2>
      <form action="submit">
        <input onChange={handleHeight} type="number" />
        <input onChange={handleWidth} type="number" />
        <button onClick={handleSubmit}>Start Drawing</button>
      </form>
    </article>
  );
};

export default Form;
