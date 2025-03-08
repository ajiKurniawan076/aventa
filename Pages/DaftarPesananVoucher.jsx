import React, { useContext, useEffect, useState } from 'react'
import FotoVoucher from '../src/assets/FotoVoucher.svg'
import Navbar2 from './Component/Navbar2'
import iMin from '../src/assets/iMin.svg'
import iPlus from '../src/assets/iPlus.svg'
import iCtg from '../src/assets/iCtg.svg'
import { contextall } from '../src/App'
import { useNavigate } from 'react-router-dom'


const DaftarPesananVoucher = () => {
    const navigate = useNavigate()
    const { setNav } = useContext(contextall)
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(true);
        setTimeout(() => {
        }, 1000);
    };
    useEffect(() => {
        setNav('Daftar Pesanan')
    },[])

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide'>
            <Navbar2 />
            <div className='flex mt-[70px] md:w-full px-[20px]'>
                <div className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-[10px] '>
                    <img src={FotoVoucher} alt="" />
                </div>
                <div className='w-[144px] md:w-[50%] lg:w-[60%] md:text-[16px] h-[45px] ml-[15px]'>
                    <p className='font-semibold'>Stock Market Mastery</p>
                    <p>Rp. 30.000</p>
                </div>
            </div>
            <div className='w-full min-h-[10px] bg-[#EFEFEF] my-[20px]'></div>
            <div className='flex flex-col gap-[15px] w-full h-[84px] mb-[20px] px-[20px]'>
                <label className='font-semibold'>Rincian Pesanan</label>
                <div className='flex justify-between w-full'>
                    <p>Total Harga</p>
                    <p className='font-semibold'>Rp. 30.000</p>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] w-full h-[86px] mb-[30px] px-[20px]'>
                <p className='font-semibold'>Metode Pembayaran</p>
                <div className='flex justify-between w-[335px] md:w-full h-fit rounded-[10px] px-[20px] py-[15px] border border-[#EFB036]'>
                    <div className='flex flex-col gap-[5px]'>
                        <p>Saldo Voucher</p>
                        <p>Rp. 500.000</p>
                    </div>
                    <img src={iCtg} alt="" />
                </div>
            </div>
            <form className='grid gap-[15px] px-[20px] w-full mt-[30px]'>
                <div className='flex flex-col gap-[10px]'>
                    <label>Email</label>
                    <input
                        placeholder='DestyaAyu@gmail.com'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'
                        type='text'
                    />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label>No. Whatsapp</label>
                    <input
                        placeholder='089673166105'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'
                        type='text'
                    />
                </div>
            </form>
            <div  className='h-full w-full flex justify-between gap-[5px] md:gap-[20px] mt-[25px] px-[20px]'>
                <button
                    onClick={(e) => {
                    e.preventDefault
                    handleModal()
                    }}
                    className='w-full h-[44px] rounded-[360px] bg-[#EFB036] text-white text-[14px] mt-auto md:w-full flex text-center justify-center items-center'
                >
                    <p>Bayar</p>
                </button>
            </div>
            {modal && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-center z-10'>
                    <div className='bg-white w-[335px] h-[246px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                        <p>Terimakasih telah melakukan pemesanan</p>
                        <p>Product Digital. Silakan cek Email atau Whatshapp Anda.</p>
                        <a href='/' className='w-[295px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white mt-[30px]'>
                            <p>Selesai</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DaftarPesananVoucher