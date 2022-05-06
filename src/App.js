import logo from "./logo.svg";
import "./App.css";
import { Products } from "./components/Products/Products";
import { ProductViewAll } from "./components/Products/ProductViewAll";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* navBar */}

      {/* Routes-content */}
      <Routes>
        {/* landing page -Route*/}
        {/* <Route path="/" element={<LandingPage />}></Route> */}
        {/* signup page -Route*/}
        {/* <Route path="/signUp" element={<Signup />}></Route> */}
        {/* women,men,kids page -Route*/}
        <Route path="/:name" element={<Products />}></Route>
        {/* design page -Route*/}
        {/* <Route path="/design" element={<Design />}></Route> */}
        {/* ProductViewAll -Route*/}
        <Route path="/viewAll" element={<ProductViewAll />}></Route>
        {/* ProductDetails -Route*/}
        {/* <Route path="/product/:id" element={<ProductDetails />}></Route> */}
        {/* Cart page -Route*/}
        {/* <Route path="/cart" element={<Cart />}></Route> */}
        {/* checkout page -Route*/}
        {/* <Route path="/checkOut" element={<CheckOut />}></Route> */}
      </Routes>
      {/* footer */}
    </div>
  );
}
export default App;
