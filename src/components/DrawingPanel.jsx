import Row from "./Row";

const DrawingPanel = ({ gridSize, color }) => {
  const { width, height } = gridSize;
  const makeRows = Array.from(Array(height).keys());

  return (
    <article className="editor">
      {makeRows.map((index) => (
        <Row key={index} width={width} color={color} />
      ))}
    </article>
  );
};

export default DrawingPanel;
