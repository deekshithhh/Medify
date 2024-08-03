import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/NavBar/Navbar";
import HeroSection from "./Components/Herosection/Herosection";
import SearchLocation from "./Components/Search/Search";
import SearchHospital from "./Components/Search/Search";
import Footer from "./Components/Footer/Footer";
import AccordionExpandIcon from "./Components/FAQ/FAQ";
import MobileDownload from "./Components/Download/Download";
import IconLayout from "./Components/IconLayout/IconLayout";
import Carousel from "./Components/Carousel/Carousel";
import Specialization from "./Components/Specialization/Specialization";
import Specialists from "./Components/Specialist/Specialist";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <Navbar />
      <HeroSection />
      <SearchHospital />
      <IconLayout/>
      <Carousel/>
      <Specialization/>
      <Specialists/>
      <MobileDownload/>
      <AccordionExpandIcon />
      <Footer />
     
    </div>
  );
}

export default App;
