import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from './Components/NavBar/Navbar';
import HeroSection from './Components/Herosection/Herosection';
import SearchLocation from './Components/Search/Search';
import SearchHospital from './Components/Search/Search';



function App() {
  return (
    <div>
    <CssBaseline />
    <Outlet />
      <Navbar/>
      <HeroSection/>
      <SearchHospital/>
    </div>
  );
}

export default App;
