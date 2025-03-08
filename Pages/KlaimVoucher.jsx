import React, { useContext, useEffect, useState } from 'react'
import FotoVoucher from '../src/assets/FotoVoucher.svg'
import iPSam from '../src/assets/iPSam.svg'
import Navbar2 from './Component/Navbar2'
import { Link } from 'react-router-dom'
import { contextall } from '../src/App'

const KlaimVoucher = () => {
    const [data, setData] = useState([])
    const {setNav} = useContext(contextall)

    useEffect(() => {
            const dataDummy = () => {
                return {
                    voucher : [
                        { id: 1, img: FotoVoucher, nama: "stok Market", harga: 30000},
                        { id : 2, img: FotoVoucher, nama: "Digital Produk", harga: 30000},
                        { id : 3, img: FotoVoucher, nama: "stok Market", harga: 30000},
                        { id : 4, img: FotoVoucher, nama: "Digital Produk", harga: 30000},
                        { id : 5, img: FotoVoucher, nama: "stok Market", harga: 30000},
                        { id : 6, img: FotoVoucher, nama: "Digital Produk", harga: 30000},
                    ]
                }
            }
        setData(dataDummy())
        setNav('Klaim Voucher')
    }, [])
    
    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide p-[20px]'>
            <Navbar2/>
            <div className='w-full place-items-center grid gap-[15px] grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-[55px]'>
                {data?.voucher?.map((item, i) => (
                    <div key={i} className='w-[160px] h-[227px] rounded-[10px] border border-white shadow-sm shadow-gray-500'>
                        <img src={item.img} alt="Gambar" />
                        <div className='px-[10px] py-[10px] gap-[2px]'>
                            <div className='flex justify-between w-[140px]'>
                                <p className='text-[#3B6790] font-bold'>{item.nama}</p>
                                <img src={iPSam} alt="Panah" />
                            </div>
                            <p>Rp. {item?.harga?.toLocaleString('id-ID')}</p>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <Link to={'/DetailVoucher'} className='w-[140px] h-[26px] bg-[#EFB036] text-white rounded-[360px] py-[5px] px-[10px] flex justify-center items-center'>
                                <p>Order</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KlaimVoucher