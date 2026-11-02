/*
  Project Part 10 features:
  - Toggle menu: components/navigation/Nav.jsx
  - JSON parsing: pages/current-team/CurrentTeam.jsx (players.json in public)
  - List items as components: components/players/Player.jsx
  - iframe: components/footer/FooterTop.jsx (Williams-Brice map)
  - Contact form (Web3Forms): components/contact-form/Contact.jsx
  - Hand-built slideshow: pages/home/Home.jsx
  - React libraries: react-router-dom, react-router-hash-link
*/

import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/FooterTop";
import FooterBottom from "./components/footerbottom/FooterBottom";
import Header from "./components/header/Header";
import Contact from "./components/contact-form/contact";
import Home from "./pages/home/Home";
import TeamHistory from "./pages/team-history/TeamHistory";
import CurrentTeam from "./pages/current-team/CurrentTeam";
import ScheduleResults from "./pages/schedule&results/Schedule&Results";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-history" element={<TeamHistory />}/>
        <Route path="/schedule&results" element={<ScheduleResults />}/>
        <Route path="/current-team" element={<CurrentTeam />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FooterBottom />
    </HashRouter>
  );
}
export default App;