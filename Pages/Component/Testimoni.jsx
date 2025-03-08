import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import iFoto2 from "../../src/assets/iFoto2.svg";
import iFoto3 from "../../src/assets/iFoto3.svg";

const Testimoni = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]} autoplay={{ delay: 2000}}
        className="w-full mb-[70px]"
      >
        <SwiperSlide >
          <div className="w-[335px] md:w-full min-h-[270px] bg-white rounded-lg p-[10px] flex flex-col justify-start items-center text-center gap[-7px]">
          <img src={iFoto2} alt="Foto" className="w-auto h-[100px] mx-auto" />
          <label className="text-[14px] font-semibold text-black">Jeremy</label>
          <p className="text-black">
            Saya karyawan swasta punya penghasilan tetap, pengeluaran saya tidak tetap, penghasilan saya cenderung tidak cukup. Awalnya saya tidak percaya peluang bisnis ini, setelah saya coba terbukti sekarang saya sudah bisa menikmati hasilnya. Benar-benar otomatis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[335px] md:w-full min-h-[270px] bg-white rounded-lg p-[10px] flex flex-col justify-start items-center text-center gap-[7px]">
            <img src={iFoto3} alt="Foto" className="w-auto h-[100px]" />
            <label className="text-[14px] font-semibold text-black">Hana</label>
            <p className="text-black">
              Saya ibu rumah tangga tidak mendapat izin dari suami untuk bekerja karena momongan tidak bisa ditinggal, begitu mendapatkan informasi bisnis dari rumah ini, saya tidak berfikir untuk menundanya, saya coba dan saya mendapatkan hasilnya.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimoni;
