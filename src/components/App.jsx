import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/homePage";
import BuyerPage from "./BuyerPage/buyerPage";
import SellerPage from "./SellerPage/sellerPage";
import Login from "./Login/login";
import Logout from "./Logout/logout";
import NavBar from "./NavBar/navBar";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./Footer/footer";
import RegisterUser from "./RegisterUser/RegisterUser";
import ShoppingCart from "./ShoppingCart/shoppingcart";
import AddProduct from "./AddProduct/AddProduct"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch {}
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <Router>
          <NavBar user={user}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/buyer" element={<BuyerPage user={user} />} />
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/login/register" element={<RegisterUser />} />
            <Route path="/shoppingcart" element={<ShoppingCart user={user} />} />
            <Route path="/product/add" element={<AddProduct user={user} />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
