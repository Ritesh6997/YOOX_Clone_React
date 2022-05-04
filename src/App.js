import "./App.css";
import Cart from "./components/Cart.jsx/Cart";
import Navbar from "./components/Navbar/Navbar";
// import {Route,Routes} from "react-router-dom"
function App() { 
  return (
    <div>
      <Navbar></Navbar>
      <Cart></Cart>
      {/* <Routes>
      <Route path="/" element={<Expenses />} />
      <Route path="/" element={<Expenses />} />
      </Routes> */}
      <h1 className="center">123</h1>
         
    </div>
  );
}

export default App;
