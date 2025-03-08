import React from 'react'
import iFoto from '../../src/assets/iFoto.svg'
import iMenu from '../../src/assets/iMenu.svg'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const klikAktivasi = () => {
        navigate("/aktivasi")
        // console.log('coba')
    }
    const goBack = () => {
        
    }
    return (
        <div className='flex justify-between w-full md:px-[25px] md:w-full'>
            <div className='flex w-full'> 
                <div className='mr-[15px]'>
                    <img src={iFoto} alt="Foto" className='md:w-[90px] md:h-[90px]'/>
                </div>
                <div className='flex flex-col justify-center w-full'>
                    <div className='flex justify-between w-full'>
                        <p className='md:text-[16px] font-semibold w-[171px]'>Destya Ayu Sinta Putri</p>
                        <img src={iMenu} alt="Menu" />
                    </div>
                    <div onClick={klikAktivasi} className='w-[112px] md:w-[200px] md:h-[30px] h-[28px] rounded-[360px] border-[1px] border-[#EFB036] text-[#EFB036] flex justify-center items-center bg-white md:mt-[5px]'>
                        <p>Aktivasi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar