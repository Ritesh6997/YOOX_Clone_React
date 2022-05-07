import { Checkout } from './Components/CheckOut/CheckOut';
import {Route, Routes } from "react-router-dom";
import { PaymentPage } from './Components/Payment/Payment';
import './Components/CheckOut/checkout.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Checkout />}></Route>
        <Route path='/payment' element={<PaymentPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
