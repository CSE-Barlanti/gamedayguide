import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer />
        <FooterBottom />
    </React.StrictMode>
);