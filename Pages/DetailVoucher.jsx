import React, { useContext, useEffect } from 'react'
import FotoVoucher from '../src/assets/FotoVoucher.svg'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App'

const DetailVoucher = () => {
    const {setNav} = useContext(contextall)

    useEffect(() => {
        setNav('Detail Produk')
    },[])

    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide p-[20px]'>
            <Navbar2 />
            <div className='w-[316px] h-[150px] gap-[15px] mt-[55px] flex md:w-full md:items-center justify-center'>
                <div className='md:w-full flex md:justify-end md:mx-[10px] items-center'>
                    <img className='rounded-[10px]' src={FotoVoucher} alt="Gambar" />
                </div>
                <div className='flex flex-col gap-[15px] md:w-full md:mx-[10px] justify-center items-start'>
                    <label className='text-[#3B6790] font-bold'>Serum Alpha Aributin</label>
                    <div className='flex flex-col gap-[2px] w-[70px] h-[36px] justify-start md:w-full'>
                        <p className='text-[12px]'>Harga</p>
                        <p className='font-semibold'>Rp. 30.000</p>
                    </div>
                </div>
            </div>
            <div className='w-[310px] h-[70px] gap-[10px] my-[10px] flex md:w-full md:justify-center md:gap-[15px]'>
                <div className='w-[70px] h-[70px]'>
                    <img className='rounded-[10px]' src={FotoVoucher} alt="FotoVoucher" />
                </div>
                <div className='w-[70px] h-[70px] rounded-[10px]'>
                    <img className='rounded-[10px]' src={FotoVoucher} alt="FotoVoucher" />
                </div>
                <div className='w-[70px] h-[70px] rounded-[10px]'>
                    <img className='rounded-[10px]' src={FotoVoucher} alt="FotoVoucher" />
                </div>
                <div className='w-[70px] h-[70px] rounded-[10px]'>
                    <img className='rounded-[10px]' src={FotoVoucher} alt="FotoVoucher" />
                </div>
            </div>
            <div className='flex flex-col text-justify gap-[20px]'>
                <p className='font-semibold'>Deskripsi Produk</p>
                <p>Stock Market Mastery merupakan program belajar saham komprehensif yang didesain oleh RK Team untuk membantu Anda mendapatkan profit secara konsisten di pasar saham. </p>
                
                <p> Stock Market Mastery akan membahas berbagai topik yang berkesinambungan dan telah didesain secara terstruktur dari tahapan basic hingga tingkat lanjut, sehingga cocok untuk pemula. </p>

                <p className='text-[#BDBDBD] underline'>Selengkapnya</p>
            </div>
            <div className='w-full mt-[30px]'>
                <a href='/DaftarPesananVoucher' className='flex justify-center items-center w-full h-[44px] bg-[#EFB036] rounded-[360px] text-white'>
                    <p>Order</p>
                </a>
            </div>
        </div>
    )
}

export default DetailVoucher