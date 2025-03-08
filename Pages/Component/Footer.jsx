import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import iBeranda from '../../src/assets/iBeranda.svg';
import iBerandaKun from '../../src/assets/iBerandaKun.svg';
import iRiwayat from '../../src/assets/iRiwayat.svg';
import iRiwayatKun from '../../src/assets/iRiwayatKun.svg';
import iMitra from '../../src/assets/iMitra.svg';
import iMitraKun from '../../src/assets/iMitraKun.svg';
import iProfil from '../../src/assets/iProfil.svg';
import iProfilKun from '../../src/assets/iProfilKun.svg';
import Profil from '../../src/assets/Profil.svg';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Set state berdasarkan path aktif
    const [selected, setSelected] = useState('');

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setSelected('Beranda');
        else if (path === '/Riwayat') setSelected('Riwayat');
        else if (path === '/Mitra') setSelected('Mitra');
        else if (path === '/Profil') setSelected('Profil');
    }, [location.pathname]);

    const handleButtonClick = (path) => {
        navigate(path);
    };

    const handleModal = () => {
        localStorage.setItem("modalPro", "true")
    }

    return (
        <div className='fixed bottom-0 flex justify-center gap-[20.25px] md:gap-[30.25px] lg:gap-[50.25px] w-[375px] md:w-[80%] lg:w-[60%] md:max-w-[500px] lg:max-w-[650px] h-[70px] py-[13px] bg-white'>
            {/* Beranda */}
            <div 
                className={`w-[46px] h-[45px] flex flex-col gap-[5px] justify-center items-center cursor-pointer ${selected === 'dashboard' ? "text-[#EFB036]" : "text-[#BDBDBD]"}`} 
                onClick={() => handleButtonClick('/')}
            >
                <img src={selected === 'Beranda' ? iBerandaKun : iBeranda} alt="Beranda" />
                <p>Beranda</p>
            </div>

            {/* Riwayat */}
            <div 
                className={`w-[46px] h-[45px] flex flex-col gap-[5px] justify-center items-center cursor-pointer ${selected === 'Riwayat' ? "text-[#EFB036]" : "text-[#BDBDBD]"}`}  
                onClick={() => handleButtonClick('/Riwayat')}
            >
                <img src={selected === 'Riwayat' ? iRiwayatKun : iRiwayat} alt="Riwayat" />
                <p>Riwayat</p>
            </div>

            {/* Profil (Ikon Tengah, tidak berubah) */}
            <button
                // onClick={(e) => {
                //     e.preventDefault
                //     handleModal()
                // }}
                className='-mt-[29px] start-[167px]'>
                <img src={Profil} alt="Profil" />
            </button>

            {/* Mitra */}
            <div 
                className={`w-[46px] h-[45px] flex flex-col gap-[5px] justify-center items-center cursor-pointer ${selected === 'Mitra' ? "text-[#EFB036]" : "text-[#BDBDBD]"}`}  
                onClick={() => handleButtonClick("/Mitra")}
            >
                <img src={selected === 'Mitra' ? iMitraKun : iMitra} alt="Mitra" />
                <p>Mitra</p>
            </div>

            {/* Profil */}
            <div 
                className={`w-[46px] h-[45px] flex flex-col gap-[5px] justify-center items-center cursor-pointer ${selected === 'Profil' ? "text-[#EFB036]" : "text-[#BDBDBD]"}`}  
                onClick={() => handleButtonClick('/Profil')}
            >
                <img src={selected === 'Profil' ? iProfilKun : iProfil} alt="Profil" />
                <p>Profil</p>
            </div>
        </div>
    );
};

export default Footer;
