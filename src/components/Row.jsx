import Pixel from "./Pixel";

const Row = ({ width, color }) => {
  const makePixels = Array.from(Array(width).keys());

  return (
    <div className="row">
      {makePixels.map((pixel, index) => (
        <Pixel pixel={pixel} key={index} color={color} />
      ))}
    </div>
  );
};

export default Row;
