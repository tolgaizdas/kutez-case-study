// Import necessary modules from React and Swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ProductCard from "./ProductCard";

const Carousel = ({ products }) => {
  return (
    <div>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: gray;
          }

          .swiper-button-next.swiper-button-disabled,
            .swiper-button-prev.swiper-button-disabled {
                color: white;
            }
        `}
      </style>
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Navigation, Scrollbar]}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div className="bg-white px-16 pb-10 flex">
              <ProductCard key={product.name} product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
