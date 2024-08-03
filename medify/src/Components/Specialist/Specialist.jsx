import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import lesley from "../../assets/lesley.png";
import ahmad from "../../assets/ahmad.png";
import heena from "../../assets/heena.png";
import ankur from "../../assets/ankur.png";
import stevens from "../../assets/stevens.png";
import { Autoplay, Pagination } from "swiper/modules";


export default function Specialists() {
  const SpecialistData = [
    { img: lesley, title: "Dr. Lesley Hull", department: "Medicine" },
    { img: ahmad, title: "Dr. Ahmad Khan", department: "Neurologist" },
    { img: heena, title: "Dr. Heena Sachdeva", department: "Orthopadics" },
    { img: ankur, title: "Dr. Ankur Sharma", department: "Medicine" },
    { img: stevens, title: "Dr. Ahmad Stevens", department: "Neurologist" },
    { img: lesley, title: "Dr. Lesley Hull", department: "Medicine" },
    { img: heena, title: "Dr. Heena Sachdeva", department: "Orthopadics" },
  ];
  const SpecialistCard = ({ title, img, department }) => {
    return (
        <Box textAlign="center">
        <Box component="img" src={img} width={1} />
        <Typography color="#1B3C74">{title}</Typography>
        <Typography fontWeight={500} color="#primary.main">
          {department}
        </Typography>
      </Box>
    )
  
  };

  return (
    <Box py={4} id="find-doctors">
      <Typography
        variant="h2"
        textAlign="center"
        mb={5}
        px={3}
        fontFamily={"Poppins"}
      >
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{ 767: { slidesPerView: 4 } }}
      >
        {SpecialistData.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              title={doc.title}
              img={doc.img}
              department={doc.department}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
