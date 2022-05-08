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
import Footer from "./components/footer/footer";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { Wishlist } from "./components/Wishlist/Wishlist";
function App() {
  return (
    <div style={{backgroundColor: "whitesmoke",}}>
      {/* navBar */}
      <Navbar></Navbar>
      <Routes>
        {/* landing page -Route*/}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* signup page -Route*/}
        <Route path="/signup" element={<Signup/>}></Route>
        {/* women,men,kids page -Route*/}
        <Route path="/:name" element={<Products />}></Route>
        {/* design page -Route*/}
        <Route path="/designart" element={<DesignComponent />}></Route>
        {/* ProductViewAll -Route*/}
        <Route path="/viewAll" element={<ProductViewAll />}></Route>
        {/* ProductDetails -Route*/}
        <Route path="/product/:id" element={<ProductsDetails />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
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
      <Footer></Footer>
    </div>
  );
}
export default App;
