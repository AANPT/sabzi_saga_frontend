import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Market from "./components/Market/Market";
import About from "./components/About/About";
import ProductPage from "./components/ProductPage/ProductPage";
import Prediction from "./components/Prediction/Prediction";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/Layout/NotFound/NotFound";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
