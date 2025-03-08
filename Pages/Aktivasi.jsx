import React, { useContext, useEffect, useState } from 'react'
import Navbar2 from './Component/Navbar2'
import FrameAkti from '../src/assets/FrameAkti.svg'
import iSalin from '../src/assets/iSalin.svg'
import { useNavigate } from 'react-router-dom'
import { contextall } from '../src/App'

const Aktivasi = () => {
    const { setNav } = useContext(contextall)
        
    useEffect(() => {
        setNav('Aktivasi')
    },[])
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2 className='mb-[60px]'></Navbar2>
            <div className='w-full flex flex-col items-center mt-[35px]'>
                <img src={FrameAkti} alt="Frame Aktivasi" />
                <p>Biaya Aktivasi</p>
                <div className='flex justify-between w-[244px] h-[48px] items-center'>
                    <p className='text-[40px] font-bold'>Rp. 250.139</p>
                    <img src={iSalin} alt="Salin" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-[15px] w-full my-[50px]'>
                <p>Silakan Transfer ke Rekening</p>
                <div className='flex justify-center items-center h-[26px] gap-[5px]'>
                    <p className='text-[16px] text-[#3B6790]'>BRI</p>
                    <p className='text-[20px]'>76009729364223</p>
                    <img src={iSalin} alt="Salin" />
                </div>
                <p>a . n Bangun Nusantara Emas</p>
            </div>
            <div className='flex w-full justify-center items-center text-[14px] text-[#FF3B30]'>
                <label>* Pastikan nominal transfer sampai 3 digit Terakhir</label>
            </div>
            <div className='h-full w-full flex justify-center'>
                <a href='/UploadBukti' className='w-[335px] h-[44px] rounded-[360px] border border-[#EFB036] text-[14px] mt-auto md:w-full md:mx-[50px] flex justify-center items-center'>
                    <p>Upload Bukti Transfer</p>
                </a>
            </div>
            {/* {modal && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-end'>
                    <div className='bg-white w-[335px] h-[228px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-[20px]'>
                        <div className='flex flex-col place-items-center items-center text-center gap-[30px]'>
                            <p>Terimakasih telah melakukan pembelian, kami akan segera mengirim pesanan Anda.</p>
                            <div onClick={HandleKlik} className='w-[295px] h-[44px] py-[5px] px-[30px] rounded-[360px] bg-[#EFB036] text-white flex items-center justify-center'>
                                <p>Selesai</p>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Aktivasi