import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseState from "./25-05/UseState";
import NotFound from "./NotFound";
import UseState2 from "./26-05/UseState2";
import UseEffect from "./26-05/UseEffect1";
import UseEffect2 from "./26-05/UseEffect2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state-2" element={<UseState2 />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect-2" element={<UseEffect2 />} />
      </Routes>
    </div>
  );
}

export default App;
