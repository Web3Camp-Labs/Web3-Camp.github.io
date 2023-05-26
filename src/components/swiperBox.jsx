import styled from "styled-components";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination,Navigation } from "swiper";
import AdImg3 from "../assets/images/news/daopark.png";

const AdvLine = styled.ul`
    display: flex;
  align-items: center;
  margin-top: 60px;
  --swiper-theme-color: #f3801f;
  .swiper{
    width: calc(100% + 40px);
    padding:40px 20px 60px;
    margin-left: -20px;
  }
  .swiper-slide{
    background: #fff;
    box-shadow: 0 8px 20px rgba(45,56,68,.08);
    border-radius: 10px;
  }
  li{
    width: 100%;
    margin-right: 2%;
    height: 160px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    &:last-child{
      margin-right: 0;
    }
    img{
      width: 100%;
      border-radius: 10px;
    }
  }
  
`
export default function (){
    return <div>
        <AdvLine>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Navigation,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide ><li>33</li></SwiperSlide>
                <SwiperSlide ><li>3</li></SwiperSlide>
                <SwiperSlide >
                    <li>
                        <img src={AdImg3} alt=""/>
                    </li>
                </SwiperSlide>
            </Swiper>
        </AdvLine>
    </div>
}