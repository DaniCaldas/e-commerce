import adidas from '../../img/adidas.png'
import adidas_img2  from '../../img/superstar.png'
import adidas_img3 from'../../img/assets.png'
import nike_img1 from '../../img/airforce.png'
import nike_img2 from '../../img/airmax.png'
import nike_img3 from '../../img/nike_dunk.png'

import { Img } from "./style";

import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import { Pagination, Autoplay } from 'swiper';

import './Style.css';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

const images = [adidas, adidas_img2, adidas_img3, nike_img1, nike_img2, nike_img3]

export default function Catalogo() {

    return(
        <Swiper
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={true}
        >
            { images.map((img) => (
                <SwiperSlide key={img} ><Img key={img.length} src={img}/></SwiperSlide>
                ))
            }   
        </Swiper>
        );
}