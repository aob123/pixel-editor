import Row from "./Row";

const DrawingPanel = ({ gridSize, color }) => {
  const { width } = gridSize;
  const makeRows = Array.from(Array(width).keys());

  return (
    <article className="editor">
      {makeRows.map((index) => (
        <Row key={index} width={width} color={color} />
      ))}
    </article>
  );
};

export default DrawingPanel;
