import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { logout } from "../../redux/actions/authActions";
import { getCart } from "../../redux/actions/cartActions";

const Navbar = ({ className }) => {
  const [menu, setMenu] = useState("shop");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: cartItems, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const totalCartItems = useMemo(() => {
    return cartItems
      ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
      : 0;
  }, [cartItems]);

  const menuRef = React.useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={`navbar ${className}`}>
      <Link
        to="/"
        onClick={() => {
          setMenu("home");
        }}
        className="nav-logo"
      >
        <img src={logo} alt="Logo" />
        <p>EverGreen Nursery</p>
      </Link>
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt="Dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("plants");
          }}
        >
          <Link to="/plants">Plants</Link>
          {menu === "plants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pots");
          }}
        >
          <Link to="/pots">Pots and Planters</Link>
          {menu === "pots" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("tools");
          }}
        >
          <Link to="/tools">Tools</Link>
          {menu === "tools" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("gifts");
          }}
        >
          <Link to="/gifts">Gifting</Link>
          {menu === "gifts" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={handleLogout}>Logout</button>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{loading ? "..." : totalCartItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
