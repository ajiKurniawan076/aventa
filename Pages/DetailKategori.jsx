import React, { useContext, useEffect, useState } from 'react'
import Navbar2 from './Component/Navbar2'
import GambarKategori from '../src/assets/GambarKategori.svg'
import iPSam from '../src/assets/iPSam.svg'
import { Link } from 'react-router-dom'
import { contextall } from '../src/App'

const DetailKategori = () => {
    const [data, setData] = useState()
    const {setNav} = useContext(contextall)

    useEffect(() => {
        const dummy = () => {
            return {
                jenisKategori: [
                    { id: 1, img: GambarKategori, nama: "Serum", harga: 30000, komisi: 12000 },
                    { id: 2, img: GambarKategori, nama: "Serum a", harga: 30000, komisi: 12000 },
                    { id: 3, img: GambarKategori, nama: "Serum b", harga: 30000, komisi: 12000 },
                    { id: 4, img: GambarKategori, nama: "Serum c", harga: 30000, komisi: 12000 },
                    { id: 5, img: GambarKategori, nama: "Serum d", harga: 30000, komisi: 12000 },
                    { id: 6, img: GambarKategori, nama: "Serum e", harga: 30000, komisi: 12000 },
                ]
            }
        }
        setData({ jenisKategori: dummy().jenisKategori.slice(0, 4) });
        {/* nama kategori saat dipilih */}
        setNav('Kecantikan') 
    },[])
    return (
        <div className='flex flex-col bg-white w-full items-start text-[12px] text-[#454545] min-h-full h-fit overflow-y-scroll scrollbar-hide px-[20px] pb-[20px]'>
            <Navbar2/>
            <div className='w-full'>
                <div className='flex justify-between mb-[15px] md:px-[25px] mt-[80px]'>
                    {/* nama kategori saat dipilih */}
                    <label className='text-[14px] font-bold'>Kecantikan</label> 
                    <a href='/KlaimVoucher' className='text-[14px] text-[#EFB036]'>Lihat Semua</a>
                </div>
                <div className='grid grid-cols-2 place-items-start mt-[15px] gap-[15px] '>
                    {data?.jenisKategori?.map((item, i) => (
                        <Link to={`/DetailProdukKategori/${item.id}`} key={i} className='w-[160px] h-[227px] flex flex-col rounded-[10px] shadow-sm shadow-gray-400'>
                            <img src={item.img} alt="" className='min-w-[160px] h-[130px]' />
                            <div className='flex justify-between w-full px-[10px] mt-[11px]'>
                                <p className='text-[#3B6790] font-bold line-clamp-1 '>{item.nama}</p>
                                <img src={iPSam} alt="Panah" />
                            </div>
                                <p className='px-[10px] mt-[2px]'>Rp. {item?.harga?.toLocaleString("id-ID")}</p>
                            <div className='text-[12px] text-white bg-[#EFB036] w-fit py-[5px] px-[10px] rounded-r-[360px] mt-[11px]'>
                                <p>Komisi Rp {item?.komisi?.toLocaleString('id-ID')}</p>
                            </div>
                        </Link>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default DetailKategori