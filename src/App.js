import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import {Store} from "./components/Redux/store" 
import { Products } from "./components/Products/Products";
import { ProductViewAll } from "./components/Products/ProductViewAll";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/Navbar/ProtectedRoutes";
import DesignComponent from "./components/DesignComponent";
import ProductsDetails from "./components/productsDetails/ProductsDetails";
import Cart from "./components/Cart.jsx/Cart";
function App() {
  return (
    <div>
      {/* navBar */}
      <Navbar></Navbar>
      <Routes>
        {/* landing page -Route*/}
        {/* <Route path="/" element={<LandingPage />}></Route> */}
        {/* signup page -Route*/}
        {/* <Route path="/signUp" element={<Signup />}></Route> */}
        {/* women,men,kids page -Route*/}
        <Route path="/:name" element={<Products />}></Route>
        {/* design page -Route*/}
        <Route path="/design" element={<DesignComponent />}></Route>
        {/* ProductViewAll -Route*/}
        <Route path="/viewAll" element={<ProductViewAll />}></Route>
        {/* ProductDetails -Route*/}
        <Route path="/product/:id" element={<ProductsDetails />}></Route>
        {/* Cart page -Route*/}
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        ></Route>
        {/* checkout page -Route*/}
        {/* <Route path="/checkOut" element={<CheckOut />}></Route> */}
      </Routes>
      {/* footer */}
    </div>
  );
}
export default App;
