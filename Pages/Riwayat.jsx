import React from 'react'
import Footer from './Component/Footer'

const Riwayat = () => {
    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide'>
            <div className='top-0 start-0 flex justify-center w-full fixed items-center'>
                <div className='w-[375px] md:max-w-[500px] lg:max-w-[650px] md:w-[80%] relative lg:w-[60%] h-[60px] shadow-sm flex bg-white justify-center items-center font-semibold text-[14px]'>
                    <p>Pesanan</p>
                </div>
            </div>
            <div className='w-full h-fit flex justify-start gap-[5px] md:gap-[15px] my-[20px] px-[20px] mt-[80px]'>
                <div className='md:w-[20%] md:h-[35px] w-[85px] h-[28px] bg-[#EFB036] text-white flex justify-center items-center text-center rounded-[100px]'>
                    <p>Semua</p>
                </div>
                <div className='md:w-[25%] md:h-[35px] w-[78px] h-[28px] border border-[#EFB036] text-[#EFB036] flex justify-center items-center text-center rounded-[100px]'>
                    <p>Order</p>
                </div>
                <div className='md:w-[50%] md:h-[35px] w-[125px] h-[28px] border border-[#EFB036] text-[#EFB036] flex justify-center items-center text-center rounded-[100px]'>
                    <p>Klaim Voucher</p>
                </div>
            </div>
            <a href='/DetailPesanan' className='flex justify-between w-full h-fit border border-[#BDBDBD] px-[20px] py-[10px]'>
                <div className='flex flex-col gap-[5px] items-start'>
                    <p className='text-[#BDBDBD]'>08/02/2025</p>
                    <p className='font-semibold'>Total Pesanan</p>
                    <p className='font-semibold'>Pendapatan Komisi</p>
                </div>
                <div className='flex flex-col gap-[5px] items-end'>
                    <p className='text-[#4D80AA]'>Order</p>
                    <p>Rp 75.000</p>
                    <p className='text-[#34C759]'>+ Rp 31.000</p>
                </div>
            </a>
            <div className='flex justify-between w-full h-fit border border-[#BDBDBD] px-[20px] py-[10px]'>
                <div className='flex flex-col gap-[5px] items-start'>
                    <p className='text-[#BDBDBD]'>08/02/2025</p>
                    <p className='font-semibold'>Total Pesanan</p>
                </div>
                <div className='flex flex-col gap-[5px] items-end'>
                    <p className='text-[#4D80AA]'>Klaim Voucher</p>
                    <p>Rp 75.000</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Riwayat