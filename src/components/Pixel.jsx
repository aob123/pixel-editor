import { useState } from "react";

const Pixel = ({ color }) => {
  const [bgColor, setBgColor] = useState({ backgroundColor: "#000000" });
  const handleBgColor = () => {
    setBgColor({ bgColor, backgroundColor: color.hex });
  };

  return <div onClick={handleBgColor} style={bgColor} className="pixel"></div>;
};

export default Pixel;
