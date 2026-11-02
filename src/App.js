import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/FooterTop";
import FooterBottom from "./components/footerbottom/FooterBottom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import TeamHistory from "./pages/team-history/TeamHistory";
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
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
      <Footer />
      <FooterBottom />
    </HashRouter>
  );
}
export default App;