import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SettingsPanel from "./Components/SettingsPanel/SettingsPanel";
import plant_banner from "./Components/Assets/banner_plants.png";
import pots_banner from "./Components/Assets/banner_pots.png";
import tools_banner from "./Components/Assets/banner_tools.png";
import gift_banner from "./Components/Assets/banner_gifts.png";
import { logout } from "./redux/actions/authActions";
import setTheme from "./redux/actions/themeActions";

import "./themes.css";
export const backend_url = "http://localhost:4000";
export const currency = "₹";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth?.isAuthenticated;
  const currentTheme = useSelector((state) => state.theme.theme);

  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    dispatch(logout());
    const savedTheme = localStorage.getItem("appTheme") || "light";
    dispatch(setTheme(savedTheme));
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [dispatch]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme") || "light";
    dispatch(setTheme(savedTheme));
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("appTheme", currentTheme);
  }, [currentTheme]);

  const toggleHeaderStyle = () => {
    setIsSticky((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <Navbar className={isSticky ? "header-sticky" : "header-static"} />
      )}

      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <LoginSignup />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/plants"
          element={
            isAuthenticated ? (
              <ShopCategory banner={plant_banner} category="plants" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/pots"
          element={
            isAuthenticated ? (
              <ShopCategory banner={pots_banner} category="pots" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tools"
          element={
            isAuthenticated ? (
              <ShopCategory banner={tools_banner} category="tools" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/gifts"
          element={
            isAuthenticated ? (
              <ShopCategory banner={gift_banner} category="gifts" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/product/:productId"
          element={isAuthenticated ? <Product /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>

      {isAuthenticated && <Footer />}
      {isAuthenticated && (
        <SettingsPanel onToggleHeaderStyle={toggleHeaderStyle} />
      )}
    </BrowserRouter>
  );
}

export default App;
