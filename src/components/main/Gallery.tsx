import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "./Gallery.css"; // Importa los estilos personalizados
import { Pagination } from "swiper/modules";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        type: "progressbar",
      }}
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="gallery-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
