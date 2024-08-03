import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './CardCarousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Import images
import img1 from '../../assets/main/ZqyIWR5LeNNTxvyq_WhatsAppImage2024-08-02at1.18.10AM.avif';
import img2 from '../../assets/main/ZqyIWx5LeNNTxvys_WhatsAppImage2024-08-02at1.18.10AM-1-.avif'
import img3 from '../../assets/main/ZqyIXx5LeNNTxvyv_WhatsAppImage2024-08-02at1.18.09AM.avif'

import soap from '../../assets/svg/soap-solid.svg'
import shapoo from '../../assets/svg/jug-detergent-solid.svg'
import wheels from '../../assets/svg/wheel.svg'

// Puedes agregar más imágenes aquí y exportarlas

const CardCarousel = () => {
  const services = [
    {
      id: 1,
      title: 'Servicio Básico',
      imgSrc: img1, 
      services: [
        { icon: soap, label: 'Exterior' },
        { icon: shapoo, label: 'Shampoo' },
        { icon: wheels, label: 'Rines' }
      ]
    },
    {
      id: 2,
      title: 'Servicio Intermedio',
      imgSrc: img2, 
      services: [
        { icon: '', label: 'Shampoo' },
        { icon: '', label: 'Exterior' },
        { icon: '', label: 'Rines' }
      ]
    },
    {
      id: 3,
      title: 'Servicio Premium',
      imgSrc: img3, 
      services: [
        { icon: 'steering-wheel', label: 'Exterior' },
        { icon: 'wheel', label: 'Rines' },
        { icon: 'wash', label: 'Shampoo' }
      ]
    }
  ];

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {services.map(service => (
        <SwiperSlide key={service.id}>
          <div className='card_carousel'>
            <img src={service.imgSrc} alt={`Imagen del servicio ${service.id}`} className='card__image' />
            <div className='card__content'>
              <div className='type__service'>
                <p>{service.title}</p>
              </div>
              <div className='sub__services'>
                {service.services.map((item, index) => (
                  <div key={index}>
                    <div className='items'>
                        <img width='25' height='25' src={item.icon} alt={item.label} />
                        <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
