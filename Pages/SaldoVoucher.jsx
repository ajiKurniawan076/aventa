import React, { useContext, useEffect, useState } from 'react'
import Navbar2 from './Component/Navbar2'
import Gambar2 from '../src/assets/Gambar2.svg'
import iPSam from '../src/assets/iPSam.svg'
import { Link } from 'react-router-dom'
import { contextall } from '../src/App'

const SaldoVoucher = () => {
    const [data, setData] = useState([])
    const {setNav} = useContext(contextall)


    useEffect(() => {
        const dataDummy = () => {
            return [
                { id: 1, img: Gambar2, namaVoucher : "Stok Market", harga : 30000},
                { id: 2, img: Gambar2, namaVoucher : "Stok Market", harga : 30000},
                { id: 3, img: Gambar2, namaVoucher : "Stok Market", harga : 30000},
                { id: 4, img: Gambar2, namaVoucher : "Stok Market", harga : 30000},
                { id: 5, img: Gambar2, namaVoucher : "Stok Market", harga : 30000},
                { id: 6, img: Gambar2, namaVoucher : "Stok Market", harga : 30000},
            ]
        }
        setData(dataDummy())
        setNav('Saldo Voucher')
    },[])

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2/>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full md:place-items-center mt-[60px] gap-[10px] md:gap-[20px]'>
                {data.map((item, i) => (
                        <Link to="" key={i} className='w-[160px] h-[227px] rounded-[10px] border border-white shadow-lg'>
                        <img src={item.img} alt="Gambar" />
                        <div className='px-[10px] py-[10px] gap-[2px]'>
                            <div className='flex justify-between w-[140px]'>
                                <p>{item.namaVoucher}</p>
                                <img src={iPSam} alt="Panah" />
                            </div>
                            <p>Rp. {item?.harga?.toLocaleString('id-ID')}</p>
                        </div>
                        <div className='w-[140px] h-[26px] rounded-[360px] px-[20px] py-[4px] '>
                            <p>Order</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SaldoVoucher