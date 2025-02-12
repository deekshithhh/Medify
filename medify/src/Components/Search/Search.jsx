import { MenuItem, Select, Button, InputAdornment, Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchHospital() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchstates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchstates();
  }, []);

  useEffect(() => {
    const fetchcity = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    if (formData.state != "") {
      fetchcity();
    }
  }, [formData.state]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
    <Box
      component="form"
      onSubmit={handlesubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{ minWidth: 200, width: "100%" }}
        required
      >
        <MenuItem disabled selected value="">
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8 }}
        disableElevation
      >
        Submit
      </Button>
    </Box>
    </Container>
  );
}
