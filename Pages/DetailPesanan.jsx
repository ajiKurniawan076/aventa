import React, { useContext, useEffect } from 'react'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App'

const DetailPesanan = () => {
    const {setNav} = useContext(contextall)

    useEffect(() => {
        setNav('Detail Pesanan')
    },[])

    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2/>
            <div className='bg-[#34C759] py-[10px] w-full rounded-[100px] text-white flex justify-center items-center my-[20px] mt-[80px] '>
                <p>Pesanan</p>
            </div>
            <div className='flex flex-col gap-[20px] w-full h-fit mb-[30px]'>
                <div className='w-full h-fit flex flex-col gap-[15px] p-[20px] rounded-[10px] shadow-sm shadow-gray-500'>
                    <p className='font-semibold'>Informasi Pesanan</p>
                    <p className='text-[#3B6790] font-semibold'>Kaos Kaki</p> {/* Nama produk */}
                    <div className='flex justify-between w-full'>
                        <p>Harga</p>
                        <p className='text-[#3B6790]'>Rp 15.000</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Jumlah</p>
                        <p className='text-[#3B6790]'>X 1</p> {/* Jumlah Pembelian Produk */}
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Total Harga</p>
                        <p className='text-[#3B6790]'>Rp 15.000</p>
                    </div>
                    <p className='text-[#3B6790] font-semibold'>Serum Alpha Aributin</p> {/* Nama produk */}
                    <div className='flex justify-between w-full'>
                        <p>Harga</p>
                        <p className='text-[#3B6790]'>Rp 15.000</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Jumlah</p>
                        <p className='text-[#3B6790]'>X 1</p> {/* Jumlah Pembelian Produk */}
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Total Harga</p>
                        <p className='text-[#3B6790]'>Rp 15.000</p>
                    </div>
                    <div className='w-full border border-dashed border-[#3B6790]'></div>
                    <div className='flex justify-between w-full'>
                        <p>Total Pembayaran</p>
                        <p className='text-[#3B6790]'>Rp 75.000</p>
                    </div>
                </div>
                <div className='w-full h-fit flex flex-col gap-[15px] p-[20px] rounded-[10px] shadow-sm shadow-gray-500'>
                    <p className='font-semibold'>Metode Pembayaran</p>
                    <p className='text-[#3B6790]'>Transfer Bank</p>
                </div>
                <div className='w-full h-fit flex flex-col gap-[15px] p-[20px] rounded-[10px] shadow-sm shadow-gray-500'>
                    <p className='font-semibold'>Metode Pembayaran</p>
                    <p className='text-[#34C759]'>Rp 31.000</p>
                </div>
                <div className='w-full h-fit flex flex-col gap-[15px] p-[20px] rounded-[10px] shadow-sm shadow-gray-500'>
                    <p className='font-semibold'>Informasi Pengiriman</p>
                    <div className='w-full h-fit flex flex-col gap-[5px]'>
                        <p className='font-semibold'>Nama Penerima</p>
                        <p className='text-[#3B6790]'>Destya Ayu</p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-[5px]'>
                        <p className='font-semibold'>No. Telepon</p>
                        <p className='text-[#3B6790]'>089673166105</p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-[5px]'>
                        <p className='font-semibold'>Provinsi</p>
                        <p className='text-[#3B6790]'>Jawa Tengah</p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-[5px]'>
                        <p className='font-semibold'>Kab / Kota</p>
                        <p className='text-[#3B6790]'>Kota Semarang</p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-[5px]'>
                        <p className='font-semibold'>Alamat Lengkap</p>
                        <p className='text-[#3B6790]'>Jl. Merak No. 2, Sidorejo, Salatiga</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPesanan