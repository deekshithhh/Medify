// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import offer1 from "../../assets/Offer1.png";
import offer2 from "../../assets/Offer2.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Container } from "@mui/material";

export default function Carousel() {

  return (
    <Box py={6}>
    <Container maxWidth='x1'>

    
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      
    >
      <SwiperSlide>
      <Box component={'img'} src={offer1} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </SwiperSlide>
      <SwiperSlide>
      <Box component={'img'} src={offer2}style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
      <Box component={'img'} src={offer1} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </SwiperSlide>
      <SwiperSlide>
      <Box component={'img'} src={offer2}style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
    </Swiper>
    </Container>
    </Box>
  );
}
