import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperDemo() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2, // Show 2 slides per view on desktop
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-white p-2">
            <div className="card border-0 h-100 w-100">
              <div>
                <img src="services-1.jpg" alt="3D Scanner" className="w-100" />
              </div>
              <h5 className="card-title p-2">3D Scanner</h5>
              <div className="card-body">
                Handheld 3D Laser Scanner Used for 3D Scanning, 3D Modeling,
                Inspection, Reverse Engineering.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2">
            <div className="card border-0 h-100 w-100">
              <div>
                <img src="services-1.jpg" alt="3D Scanner" className="w-100" />
              </div>
              <h5 className="card-title p-2">3D Scanner</h5>
              <div className="card-body">
                Handheld 3D Laser Scanner Used for 3D Scanning, 3D Modeling,
                Inspection, Reverse Engineering.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2">
            <div className="card border-0 h-100 w-100">
              <div>
                <img src="services-1.jpg" alt="3D Scanner" className="w-100" />
              </div>
              <h5 className="card-title p-2">3D Scanner</h5>
              <div className="card-body">
                Handheld 3D Laser Scanner Used for 3D Scanning, 3D Modeling,
                Inspection, Reverse Engineering.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2">
            <div className="card border-0 h-100 w-100">
              <div>
                <img src="services-1.jpg" alt="3D Scanner" className="w-100" />
              </div>
              <h5 className="card-title p-2">3D Scanner</h5>
              <div className="card-body">
                Handheld 3D Laser Scanner Used for 3D Scanning, 3D Modeling,
                Inspection, Reverse Engineering.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
