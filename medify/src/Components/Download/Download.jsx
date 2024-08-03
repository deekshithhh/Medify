import {
  Container,
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import mobile from "../../assets/mobile.jpg";

export default function MobileDownload() {
  return (
    <div style={{ background: "#eaf2ff" }}>
      <Stack
        direction={{ md: "row" }}
        spacing={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={mobile}
          style={{ width: "35%", height: "450px" }}
        ></Box>
        <Box
          position="relative"
          pl={{ xs: "36px", md: "50px" }}
          mb={{ xs: 4, md: 0 }}
        >
          <Typography variant="h2" mb={2}>
            Download the
            <br />
            <Box component="span" color="primary.main">
              Medify{" "}
            </Box>
            App
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography fontWeight={600} mb={1}>
            Get the link to download the app
          </Typography>
          <Box component="form">
            <TextField
              placeholder="Enter phone number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              required
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              disableElevation
            >
              Send SMS
            </Button>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
