import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CardCarousel.css";

import { storeMian } from "../../zustand/store";
import { useStore } from "zustand";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Import images
import img1 from "../../assets/main/1.png";
import img2 from "../../assets/main/2.png";
import img3 from "../../assets/main/3.png";
import img4 from "../../assets/main/4.png";
import img5 from "../../assets/main/5.png";

import soap from "../../assets/svg/soap-solid.svg";
import shapoo from "../../assets/svg/jug-detergent-solid.svg";
import wheels from "../../assets/svg/wheel.svg";
import scent from "../../assets/svg/spray-can-sparkles-solid.svg";
import vacuum from "../../assets/svg/vacuum.svg";
import rug from "../../assets/svg/rug-solid.svg";

import chemicalGuys from "../../assets/svg/chemical-guys.svg";
import purplePower from "../../assets/svg/purple-power.svg";
import rainX from "../../assets/svg/rain-x.svg";
import meguiars from "../../assets/svg/Meguiars.svg";

const CardCarousel = () => {
  const { variationMain }: any = useStore(storeMian);
  const carouselRef = useRef<HTMLDivElement>(null);

  const setVariationMain = storeMian((state) => state.setVariationMain);
  const smoothScrollTo = (element: HTMLElement, duration: number) => {
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      window.scrollTo(0, start + distance * percentage);
      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    if (variationMain === "card" && carouselRef.current) {
      smoothScrollTo(carouselRef.current, 1000); // 1000 ms = 1 segundo
    }
    setVariationMain("");
  }, [variationMain]);

  const sendForm = () => {
    setVariationMain("form");
  };

  const services = [
    {
      id: 1,
      title: "Servicio Bronce",
      imgSrc: img1,
      services: [
        { icon: soap, label: "Exterior" },
        { icon: shapoo, label: "Shampoo" },
        { icon: vacuum, label: "Aspirado de tapetes, pisos y cajuelas" },
        {
          icon: null,
          label:
            "** Si el auto cuenta con suciedad EXTREMA, se aplica un costo extra",
        },
      ],
    },
    {
      id: 2,
      title: "Servicio Plata",
      imgSrc: img2,
      services: [
        { icon: soap, label: "Exterior" },
        { icon: shapoo, label: "Shampoo" },
        { icon: wheels, label: "Rines" },
        { icon: vacuum, label: "Aspirado de tapetes, pisos y cajuela" },
        { icon: rug, label: "Lavado de tapetes" },
        { icon: shapoo, label: "Cera" },
        { icon: scent, label: "Aroma" },
        {
          icon: null,
          label:
            "** Si el auto cuenta con suciedad EXTREMA, se aplica un costo extra",
        },
      ],
    },
    {
      id: 3,
      title: "Servicio Oro",
      imgSrc: img3,
      services: [
        {
          icon: soap,
          label:
            "Carrocería completa, limpieza de cromados, aluminios y humectante de plásticos de exterior",
        },
        {
          icon: chemicalGuys,
          label:
            "Shampoo hiperconcentrado a base de cítricos y potenciador del brillo formulado para resaltar un brillo vibrante en todos los colores de pintura",
        },
        { icon: purplePower, label: "Limpieza profunda de rines y llantas" },
        {
          icon: vacuum,
          label: "Aspirado de tapetes, asientos, pisos y cajuela",
        },
        { icon: purplePower, label: "Lavado y desengrasante de tapetes" },
        {
          icon: meguiars,
          label: "Humectante plásticos y pieles de interiores",
        },
        { icon: chemicalGuys, label: "Cera de carnauba" },

        { icon: rainX, label: "Limpiador de vidrios repelente al agua" },
        { icon: scent, label: "Aroma premium a elección" },
        {
          icon: null,
          label:
            "** Si el auto cuenta con suciedad EXTREMA, se aplica un costo extra",
        },
      ],
    },
    {
      id: 4,
      title: "Servicio Diamante",
      imgSrc: img4,
      services: [
        { icon: null, label: "Lo mismo que Servicio Oro pero con: " },
        {
          icon: chemicalGuys,
          label:
            "Descontaminación de pintura para retirar materiales incrustados y adheridos a la pintura para dejar liso el coche",
        },
        {
          icon: chemicalGuys,
          label: "Rejuvenecimiento y renovación de pieles y vinilos",
        },
        {
          icon: chemicalGuys,
          label:
            "Limpieza a PROFUNDIDAD de hendiduras de puertas, tableros y plásticos en general para una renovación interior completa.",
        },
        { icon: rainX, label: "Líquido para vidrios anti-empañante" },
        {
          icon: chemicalGuys,
          label: "Fijador y exponenciador de cera para un auto como espejo",
        },
        { icon: chemicalGuys, label: "Restaurador de llantas" },
        {
          icon: chemicalGuys,
          label:
            "Cerámica hidrofóbica para la carrocería, no más manchas de agua.",
        },
      ],
    },
    {
      id: 5,
      title: "Servicio Diamante con Faros",
      imgSrc: img5,
      services: [
        { icon: null, label: "Lo mismo que Servicio Diamante pero con: " },
        { icon: chemicalGuys, label: "Pulido de faros delanteros " },
      ],
    },
  ];

  return (
    <div ref={carouselRef}>
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} onClick={sendForm}>
            <div className="card_carousel">
              <img
                src={service.imgSrc}
                alt={`Imagen del servicio ${service.id}`}
                className="card__image"
              />
              <div className="card__content">
                <div className="type__service">
                  <p>{service.title}</p>
                </div>
                <div className="sub__services">
                  {service.services.map((item, index) => (
                    <div key={index} className="items">
                      {item.icon != null ? (
                        <img
                          width="25"
                          height="25"
                          src={item.icon}
                          alt={item.label}
                        />
                      ) : (
                        <></>
                      )}
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
