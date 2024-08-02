import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Container, Button, Stack, Typography} from "@mui/material";
import logo from "../../assets/logo.png";
import styles from "../NavBar/Navbar.module.css";
import { Link } from "react-router-dom";
// G:\Crio\Medify\medify\src\assets

export default function Navbar() {
  return (
    <header>
        <Box>
      <Box bgcolor="#2AA7FF" >
        <Typography cfontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
        </Box>
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
          <img src={logo} alt = "medify" height={27} />
            <Stack direction="row"
            spacing={4}>
                <span>Find Doctors</span>
                <span>Hospitals</span>
                <span>Medicines</span>
                <span>Surgeries</span>
                <span>Software Provider</span>
                <span>Facilities</span>
                <Button variant="contained" disableElevation>Bookings</Button>
            </Stack>
               
            </Stack>
        </Container>
     
      </Box>
    </header>
  );
}
