"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface CarouselProps {
  slides: Array<{ imageSrc: string; altText: string; caption: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Box sx={{ width: "100%", position: "relative", height: "500px" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.altText}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority={index === 0} // Priorize a imagem inicial para melhor desempenho
                onError={(e) => console.error('Erro ao carregar imagem:', slide.imageSrc, e)}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                {slide.caption}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
