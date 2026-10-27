import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import Header from "./components/header/Header";
import TeamHistory from "./pages/team-history/TeamHistory";
import Footer from "./components/footer/FooterTop";
import FooterBottom from "./components/footerbottom/FooterBottom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />
        <TeamHistory />
        <Footer />
        <FooterBottom />
    </React.StrictMode>
);