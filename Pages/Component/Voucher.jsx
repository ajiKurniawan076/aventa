import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import iFoto2 from "../../src/assets/iFoto2.svg";
import Compo from "../../src/assets/Compo.svg";
import Compo2 from "../../src/assets/Compo2.svg";

const Voucher = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]} autoplay={{ delay: 2000}}
        className="w-full h-fit"
      >
        <SwiperSlide>
          <img src={Compo2} alt="" className="md:w-full md:px-[20px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Compo} alt="" className="md:w-full md:px-[20px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Voucher;
