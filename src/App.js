import "./App.css";
import Cart from "./components/Cart.jsx/Cart";
import Counter from "./components/Cart.jsx/counter";
import Navbar from "./components/Navbar/Navbar";
// import {Route,Routes} from "react-router-dom"
function App() { 
  return (
    <div>
      <Navbar></Navbar>
      <Cart></Cart>
      <Counter></Counter>
      {/* <Routes>
      <Route path="/" element={<Expenses />} />
      <Route path="/" element={<Expenses />} />
      </Routes> */}
      <h1 className="center">hello</h1>
         
    </div>
  );
}

export default App;
