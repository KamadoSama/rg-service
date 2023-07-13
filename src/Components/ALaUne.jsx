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
   const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
        <Container data-aos="fade-left" fluid className=' aLaUne text-center'>
            <Row className="justify-content-center mb-2">
                <h3 style={styleh2} >À la une</h3>
                <div className=" w-25" style={{height:'1px ',background: '#D9D9D9'}}></div>
            </Row>
            <Swiper
       spaceBetween={100}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
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
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

        </Container>
  );
}
