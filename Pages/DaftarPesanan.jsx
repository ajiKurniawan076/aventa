import React, { useContext, useEffect } from 'react'
import Gambar3 from '../src/assets/Gambar3.svg'
import Navbar2 from './Component/Navbar2'
import iMin from '../src/assets/iMin.svg'
import iPlus from '../src/assets/iPlus.svg'
import iCtg from '../src/assets/iCtg.svg'
import { contextall } from '../src/App'


const DaftarPesanan = () => {
    const {setNav} = useContext(contextall)
    
    useEffect(() => {
        setNav('Daftar Pesanan')
    },[])
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide'>
            <Navbar2 />
            <div className='flex mt-[70px] md:w-full px-[20px]'>
                <div className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-[10px] '>
                    <img src={Gambar3} alt="" />
                </div>
                <div className='w-[144px] md:w-[50%] lg:w-[60%] md:text-[16px] h-[45px] ml-[15px]'>
                    <p className='font-semibold'>Serum Alpha Aributin</p>
                    <p>Rp. 30.000</p>
                </div>
                <div className='w-[100px] h-[24px] md:h-full flex gap-[22.5px] mt-[60px] md:justify-start md:items-center'>
                    <img className='object-contain' src={iMin} alt="" />
                    <p>1</p>
                    <img className='object-contain'  src={iPlus} alt="" />
                </div>
            </div>
            <div className='w-full min-h-[10px] bg-[#EFEFEF] my-[20px]'></div>
            <div className='flex flex-col gap-[15px] w-full h-[84px] mb-[20px] px-[20px]'>
                <label className='font-semibold'>Rincian Pesanan</label>
                <div className='flex justify-between w-full'>
                    <p>Total Harga</p>
                    <p className='text-[#989898]'>x 1</p>
                    <p>Rp. 30.000</p>
                </div>
                <div className='flex justify-between w-full'>
                    <p>Komisi</p>
                    <p className='text-[#34C759]'>+ Rp. 12.000</p>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] w-full h-[86px] mb-[30px] px-[20px]'>
                <p className='font-semibold'>Metode Pembayaran</p>
                <div className='flex justify-between w-[335px] md:w-full h-[48px] rounded-[10px] px-[20px] py-[15px] border border-[#EFB036]'>
                    <p>Transfer</p>
                    <img src={iCtg} alt="" />
                </div>
            </div>
            <form className='grid gap-[15px] px-[20px] w-full'>
                <p className='font-semibold'>Alamat Pengirim</p>
                <div className='flex flex-col gap-[10px]'>
                    <label>Nama Lengkap</label>
                    <input
                        placeholder='Destya Ayu Sinta Putri'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'
                        type='text'
                    />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label>No. Telepon</label>
                    <input
                        placeholder='089673166105'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'
                        type='text'
                    />
                </div>
                <div className='flex w-full gap-[15px]'>
                    <div className='w-[50%] h-[72px] gap-[10px] flex flex-col'>
                        <p className=''>Provinsi</p>
                        <input
                            placeholder='089673166105'
                            className='w-[160px] h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-full '
                            type='text'
                        />
                    </div>
                    <div className='w-[50%]  h-[72px] gap-[10px] flex flex-col'>
                        <p className=''>Kab / Kota</p>
                        <input
                            placeholder='Kota Salatiga'
                            className='w-[160px] h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-full '
                            type='text'
                        />
                    </div>
                </div>
            </form>
            <a href='/DetailVoucher' className='h-full w-full flex justify-between gap-[5px] md:gap-[20px] mt-[25px] px-[20px]'>
                <button className='w-full h-[44px] rounded-[360px] bg-[#6F9CC1] text-white text-[14px] mt-auto md:w-full flex text-center justify-center items-center'>
                    <p>Tambah Produk</p>
                </button>
                <a href='/Pembayaran' className='w-full h-[44px] rounded-[360px] bg-[#EFB036] text-white text-[14px] mt-auto md:w-full flex text-center justify-center items-center'>
                    <p>Bayar</p>
                </a>
            </a>
        </div>
    )
}

export default DaftarPesanan