import logo from "./logo.svg";
import "./App.css";
import { Products } from "./components/Products/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="center">YOOX</h1>

      <Routes>
        <Route path="/:name" element={<Products />}></Route>
      </Routes>
      {/* footer */}
    </div>
  );
}
export default App;
