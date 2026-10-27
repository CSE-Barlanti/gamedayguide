import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import Header from "./components/header/Header";
import Schedule from "./pages/schedule&results/Schedule&Results";
import Footer from "./components/footer/FooterTop";
import FooterBottom from "./components/footerbottom/FooterBottom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />
        <Schedule />
        <Footer />
        <FooterBottom />
    </React.StrictMode>
);