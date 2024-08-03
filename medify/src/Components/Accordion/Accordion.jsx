import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Container, Stack } from "@mui/material";
import faqimage from "../../assets/faqs.jpg";
import AddIcon from "@mui/icons-material/Add";

export default function AccordionExpandIcon() {
  const FaqHeader = [
    "Why Choose our Medical for your Family",
    "Why we are different from others?",
    "Trusted & experience senior care & love",
    "How to get appointment for emergency",
  ];
  return (
    <Container>
      <Box >
        <Stack  alignItems={'center'}>
        <Typography variant="h3" component='h3'>Get your Answer</Typography>
        <Typography variant="h2" component='h2'>Frequently Asked Questions</Typography>
        </Stack>
        
      </Box>
      <Stack direction={{ md: "row" }} alignItems={'center'}  spacing={10}>
        <Box component={"img"} src={faqimage} style={{ width: "35%" }}></Box>
        <Box>
          {FaqHeader.map((question) => (
            <Accordion elevation={'0'}>
              <AccordionSummary
                expandIcon={<AddIcon />}
               
               
              >
                <Typography variant="h5">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We are the best network hospital in the country with advanced labs and trained staff.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Stack>
    </Container>
  );


}
