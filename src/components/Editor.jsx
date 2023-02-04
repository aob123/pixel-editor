import { useState } from "react";
import { TwitterPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";

const Editor = ({ gridSize }) => {
  const [color, setColor] = useState("#fff");
  const handleChangeComplete = (color) => {
    setColor({ ...color, background: color.hex });
  };

  return (
    <section>
      <TwitterPicker onChangeComplete={handleChangeComplete} />
      <DrawingPanel gridSize={gridSize} color={color} />
    </section>
  );
};

export default Editor;
