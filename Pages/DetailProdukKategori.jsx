import React, { useContext, useEffect } from 'react'
import Gambar3 from '../src/assets/Gambar3.svg'
import iWa from '../src/assets/iWa.svg'
import iFb from '../src/assets/iFb.svg'
import iSalin from '../src/assets/iSalin.svg'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App'


const DetailProdukKategori = () => {
    const {setNav} = useContext(contextall)

    useEffect(() => {
        setNav('Detail Produk')
    },[])

    return (
        <div className='flex flex-col w-full bg-white items-start text-[14px] text-[#454545] h-full overflow-y-scroll scrollbar-hide px-[20px] pb-[20px]'>
            <Navbar2 />
            <div className='w-full h-[375px] py-[20px] mt-[60px]'>
                <img src={Gambar3} alt="" className='w-full h-full' />
            </div>
            <div className='flex gap-[10px] mb-[20px]'>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
            </div>
            <div className='flex justify-start gap-[50px]'>
                <div className='flex flex-col gap-[15px] justify-start'>
                    <div className='grid place-items-start'>
                        <p className='text-[12px] text-[#C38100]'>Harga</p>
                        <p>Rp 30.000</p>
                    </div>
                    <div className='grid place-items-start'>
                        <p className='text-[12px] text-[#C38100]'>Stok</p>
                        <p>1000</p>
                    </div>

                </div>
                <div className='flex flex-col gap-[15px] justify-start'>
                    <div className='grid place-items-start'>
                        <p className='text-[12px] text-[#C38100]'>Komisi</p>
                        <p>Rp 12.000</p>
                    </div>
                    <div className='grid place-items-start'>
                        <p className='text-[12px] text-[#C38100]'>Terjual</p>
                        <p>Rp 10.000</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] justify-start'>
                    <div className='grid place-items-start'>
                        <p className='text-[12px] text-[#C38100]'>Berat Produk</p>
                        <p>55gr</p>
                    </div>
                    <div className='grid place-items-start'>
                        <p className='text-[12px] text-[#C38100]'>Pengiriman</p>
                        <p>Banyuwangi</p>
                    </div>
                </div>
            </div>
            <div className='w-[70px] h-[58px] flex flex-col gap-[10px] my-[20px]'>
                <label className='font-semibold'>Bagikan</label>
                <div className='flex w-[70px] h-[30px] gap-[10px]'>
                    <img src={iFb} alt="Facebook" />
                    <img src={iWa} alt="Whatsapp" />
                </div>
            </div>
            <div className='flex flex-col gap-[20px] justify-start w-full h-fit'>
                <div className='w-[335px] h-fit flex flex-col gap-[10px] md:w-full'>
                    <div className='flex gap-[5px]'>
                        <label className='font-semibold'>Deskripsi Produk</label>
                        <img src={iSalin} alt="Salin" />
                    </div>
                    <div className='w-full flex flex-col gap-[5px] justify-start px-[23px] py-[20px] border border-[#EFEFEF] rounded-[10px]'>
                        <p className='line-clamp-1'>Serum Alpha Arbutin adalah serum perawatan</p>
                        <p className='text-[#979797] text-[12px] underline'>Lihat Semua</p>
                    </div>
                </div>
                <div className='w-[335px] h-fit flex flex-col gap-[10px] md:w-full'>
                    <div className='flex gap-[5px]'>
                        <label className='font-semibold'>Iklan Soft Opening</label>
                        <img src={iSalin} alt="Salin" />
                    </div>
                    <div className='w-full flex flex-col gap-[5px] justify-start px-[23px] py-[20px] border border-[#EFEFEF] rounded-[10px]'>
                        <p>Cerahkan kulitmu dengan Alpha Arbutin!</p>
                        <p className='text-[#979797] text-[12px] underline'>Lihat Semua</p>
                    </div>
                </div>
                <div className='w-[335px] h-fit flex flex-col gap-[10px] md:w-full'>
                    <div className='flex gap-[5px]'>
                        <label className='font-semibold'>Iklan Hard Selling</label>
                        <img src={iSalin} alt="Salin" />
                    </div>
                    <div className='w-full flex flex-col gap-[5px] justify-start px-[23px] py-[20px] border border-[#EFEFEF] rounded-[10px]'>
                        <p>BELI SEKARANG! Alpha Arbutin - Serum C</p>
                        <p className='text-[#979797] text-[12px] underline'>Lihat Semua</p>
                    </div>
                </div>
                <div className='w-[335px] h-fit flex flex-col gap-[10px] md:w-full'>
                    <div className='flex gap-[5px]'>
                        <label className='font-semibold'>Link Promosi</label>
                        <img src={iSalin} alt="Salin" />
                    </div>
                    <div className='w-[335px] h-[44px] flex justify-between px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'>
                        <a className='underline text-[#007AFF]'>www.bisnisdarirumah/serum/destya</a>
                    </div>
                </div>
                <div className='w-[335px] h-fit flex flex-col gap-[10px] md:w-full'>
                    <div className='flex gap-[5px]'>
                        <label className='font-semibold'>Link Youtube</label>
                        <img src={iSalin} alt="Salin" />
                    </div>
                    <div className='w-[335px] h-[44px] flex justify-between px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'>
                        <a className='underline text-[#007AFF]'>www.youtube.com/destya</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[10px] mb-[10px] md:w-full md:px-[20px]'>
                <div
                    // onClick={(e) => {
                    //     e.preventDefault()
                    //     setModal(true)
                    // }}
                    className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border border-[#EFB036] md:w-full'
                >
                    <p>Promosi Otomatis</p>
                </div>
                <a href='/DaftarPesanan' className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white md:w-full '>
                    <p>Order</p>
                </a>
            </div>
        </div>
    )
}

export default DetailProdukKategori