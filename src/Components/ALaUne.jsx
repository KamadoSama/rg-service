import React, { useRef} from 'react';
import { Container ,Row } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../ALaUne.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// import required modules
import { EffectCards } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const  AlaUne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1900, 
      easing: 'ease', 
      once: true 
    });
  }, []);
    const styleh2 = {
        color:'#787575',
        fontWeight:'700'
    }
   
  return (
        <Container data-aos="fade-left" fluid className='mb-5 aLaUne text-center'>
            <Row className="justify-content-center mb-2">
                <h3 style={styleh2} >Nos dernières réalisations</h3>
                <div className=" w-25" style={{height:'1px ',background: '#D9D9D9'}}></div>
            </Row>
            <Swiper
       spaceBetween={100}
       autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="mySwiper"
       
      >
        <SwiperSlide>
            <video className="img-fluid" controls >
        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
      </video></SwiperSlide>
        <SwiperSlide> <video className="img-fluid" controls>
        <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
      </video></SwiperSlide>
        <SwiperSlide><video className="img-fluid" controls >
        <source
          src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
          type="video/mp4"
        />
      </video></SwiperSlide>
       
        
      </Swiper>

        </Container>
  );
}
