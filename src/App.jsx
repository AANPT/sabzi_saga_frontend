import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Market from "./components/Market/Market";
import About from "./components/About/About";
// import ProductPage from "./components/ProductPage/ProductPage";
import Products from "./components/Product/Products";
import Prediction from "./components/Prediction/Prediction";
import Login from "./components/Auth/Login";
import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/Layout/NotFound/NotFound";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import PaymentFail from "./components/Payment/PaymentFail";
import Stats from "./components/Moderator/Stats/Stats";
import ProductMgmt from "./components/Moderator/ProductMgmt/ProductMgmt";
import OrderMgmt from "./components/Moderator/Order/OrderMgmt";
import RegisterOption from "./components/Auth/RegisterOption";
import RegisterVendor from "./components/Auth/RegisterVendor";
import Loader from "./components/Layout/Loader/Loader";
import ItemList from "./components/Moderator/Order/vendorOrder";
import Checkout from "./components/Checkout/Checkout";


function App() {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);


  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])



  return (
    <Router>
      {loading ? (<Loader />) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>

            <Route path="/shops" element={
              <Market />
            } />
            <Route path="/aboutus" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:shopId" element={<Products />} />
            <Route path="/prediction" element={<Prediction />} />

            <Route path="/login" element={
              <Login />
            } />

            <Route path="registeroption" element={
              <RegisterOption />}
            />

            <Route path="/register/user" element={
              <Register />}
            />

            <Route path="/register/vendor" element={
              <RegisterVendor />
            } />

            <Route path="/cart" element={
              <Cart />
            } />

            <Route path="/profile" element={
              <Profile />
            } />

            <Route path="/forgotpassword" element={
              <ForgotPassword />
            } />

            <Route path="/resetpassword/:token" element={
              <ResetPassword />
            } />

            <Route path="/feedback" element={<Feedback />} />

            <Route path="/orders" element={<OrderMgmt />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/changepassword" element={<ChangePassword />} />


            {/* Vendor Routes */}
            <Route path="/vendor/dashboard" element={
              <Stats />
            } />
            <Route path="/vendor/productmgmt" element={
              <ProductMgmt />
            } />
            <Route path="/vendor/ordermgmt" element={
              <ItemList />
            } />

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="/paymentfail" element={<PaymentFail />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Toaster />
        </>
      )}

    </Router>
  );
}

export default App;
