import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Form from "./components/Form";

function App() {
  const [gridSize, setGridSize] = useState({ height: 8, width: 8 });
  const [gridSet, setGridSet] = useState(true);

  return (
    <main className="App">
      <h1>Pixel Editor</h1>
      {gridSet ? (
        <Form setGridSize={setGridSize} setGridSet={setGridSet} />
      ) : (
        <Editor gridSize={gridSize} />
      )}
    </main>
  );
}

export default App;
