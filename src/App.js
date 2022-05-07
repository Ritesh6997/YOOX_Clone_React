import { Checkout } from './components/CheckOut/CheckOut';
import {Route, Routes } from "react-router-dom";
import { PaymentPage } from './components/Payment/Payment';
import './components/CheckOut/checkout.css'


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
