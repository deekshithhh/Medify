import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";
import styles from "../NavBar/Navbar.module.css";
// G:\Crio\Medify\medify\src\assets

export default function Navbar() {
  return (
    <header>
      <Box>
        <Typography className={styles.Header}>
         
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
    </header>
  );
}
