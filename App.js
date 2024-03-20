import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Buynow from "./pages/Buynow";
import PaymentDone from "./pages/Paymentdone";
import Search from "./pages/Search";
import Productdetail from "./pages/Productdetail";

const App=()=>
{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="help" element={<Help/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="buynow" element={<Buynow/>}/>
          <Route path="paymentdone" element={<PaymentDone/>}/>
          <Route path="productdetail/:id" element={<Productdetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
