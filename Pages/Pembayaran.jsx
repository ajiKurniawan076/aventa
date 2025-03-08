import React, { useContext, useEffect } from 'react'
import iSalin from '../src/assets/iSalin.svg'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App'


const Pembayaran = () => {
    const {setNav} = useContext(contextall)

    useEffect(() => {
        setNav('Pembayaran')
    },[])

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2/>
            <div className='flex flex-col justify-center items-center text-center w-full my-[55px]'>
                <p>Total Pembayaran</p>
                <div className='flex w-[244px] h-[48px] justify-between'>
                    <p className='text-[40px] font-bold'>Rp. 250.139</p>
                    <img src={iSalin} alt="" />
                </div>
            </div>
            <div className='w-full h-[92px] gap-[15px] flex flex-col justify-center items-center'>
                <p>Silakan Transfer ke Rekening</p>
                <div className='flex justify-center items-center h-[26px] gap-[5px]'>
                    <p className='text-[16px] text-[#3B6790]'>BRI</p>
                    <p className='text-[20px]'>76009729364223</p>
                    <img src={iSalin} alt="Salin" />
                </div>
                <p>a . n Bangun Nusantara Emas</p>
            </div>
            <div className='flex w-full justify-center items-center text-[14px] text-[#FF3B30] mt-[50px]'>
                <label>* Pastikan nominal transfer sampai 3 digit Terakhir</label>
            </div>
            <div className='h-full w-full flex justify-center'>
                <a href='/UploadBukti' className='w-[335px] h-[44px] rounded-[360px] border border-[#EFB036] text-[14px] mt-auto md:w-full md:mx-[50px] flex justify-center items-center'>
                    <p>Upload Bukti Transfer</p>
                </a>
            </div>
        </div>
    )
}

export default Pembayaran