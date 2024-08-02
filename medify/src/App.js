import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div>
    <CssBaseline />
    <Outlet />
      <Navbar/>
    </div>
  );
}

export default App;
