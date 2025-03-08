import React, { useContext, useEffect, useState } from 'react'
import Navbar2 from './Component/Navbar2'
import iToKomisi from '../src/assets/iToKomisi.svg'
import iToPenarikan from '../src/assets/iToPenarikan.svg'
import iSaldo from '../src/assets/iSaldo.svg'
import iCari from '../src/assets/iCari.svg'
import { contextall } from '../src/App'

const SaldoKomisi = () => {
    const {setNav} = useContext(contextall)
    const [pilihKat, setPilihKat] = useState("Tarik")
    const [data, setData] = useState([])

    const Pilih = (kat) => {
        setPilihKat(kat)
        // console.log("wa")
    }
    useEffect(() => {
        const DataTabel = () => {
            return [
                { id: 1, tanggal: "08/02/2025", keterangan: "Komisi Penjualan", nominal: "Rp 50.000" },
                { id: 2, tanggal: "08/02/2025", keterangan: "Komisi Penjualan", nominal: "Rp 50.000" },
                { id: 3, tanggal: "08/02/2025", keterangan: "Komisi Penjualan", nominal: "Rp 50.000" },
                { id: 4, tanggal: "08/02/2025", keterangan: "Komisi Penjualan", nominal: "Rp 50.000" },
                { id: 5, tanggal: "08/02/2025", keterangan: "Komisi Penjualan", nominal: "Rp 50.000" },
                { id: 6, tanggal: "08/02/2025", keterangan: "Komisi Penjualan", nominal: "Rp 50.000" },
            ]
        }
        setData(DataTabel())
        console.log(DataTabel())
        setNav('Saldo Komisi')
    }, [])
    
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2 />
            <div className='flex w-full justify-between h-[38px] mt-[60px]'>
                <button
                    onClick={() => 
                        Pilih("Tarik")
                    }
                    className={`flex justify-center w-[186px] h-[38px] py-[10px] px-[20px] md:w-full ${pilihKat === "Tarik" ? "border-b-2 border-[#3B6790]" : "border-b-2 border-[#BDBDBD]"} `}
                >
                    <p>Tarik</p>
                </button>
                <button
                    onClick={() => {
                        Pilih("Riwayat")
                    }}
                    className={`flex justify-center w-[186px] h-[38px] py-[10px] px-[20px] md:w-full ${pilihKat === "Riwayat" ? "border-b-2 border-[#3B6790]" : "border-b-2 border-[#BDBDBD]"} `}
                >
                    <p>Riwayat</p>
                </button>
            </div>
            
            {pilihKat === "Tarik" ?
                <>
                    <form className='grid w-full h-full'>
                        <label className='mb-[10px] mt-[20px]'>Nominal Penarikan</label>
                        <input
                            placeholder='Rp. 100.000'
                            className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[13px] bg-[#EFEFEF] md:w-full'
                        />
                        <p className='my-[20px] font-semibold'>Transfer ke Rekening</p>
                        <div className='grid gap-[10px]'>
                            <label>Nama Bank</label>
                            <input
                                placeholder='BCA'
                                className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[13px] bg-[#EFEFEF] md:w-full'
                            />
                            <label>Nomor Rekening</label>
                            <input
                                placeholder='669900068123'
                                className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[13px] bg-[#EFEFEF] md:w-full'
                            />
                            <label>Nama Pemelik Rekening</label>
                            <input
                                placeholder='Destya Ayu Sinta Putri'
                                className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[13px] bg-[#EFEFEF] md:w-full'
                            />
                        </div>
                    </form>
                    <div className='w-full flex h-full mt-[20px]'>
                        <a href='/PIN' className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] bg-[#EFB036] flex justify-center items-center text-white mt-auto my-[10px] md:w-full'>
                            <p>Tarik</p>
                        </a>
                    </div>
                </>
                :
                <div className='w-full'>
                    <div className='px-[20px] py-[10px] grid gap-[10px] border-[#BDBDBD] shadow-lg rounded-[10px] my-[20px] md:w-full md:px-[80px]'>
                        <div className='w-[295px] h-[20px] flex md:w-full'>
                            <img src={iToKomisi} alt="Komisi" />
                            <div className='flex justify-between w-full'>
                                <label className='ml-[10px]'>Total Komisi</label>
                                <p className='text-[16px] text-[#EFB036] font-bold'>4.000.000</p>
                            </div>
                        </div>
                        <div className='w-[295px] h-[20px] flex md:w-full'>
                            <img src={iToPenarikan} alt="Komisi" />
                            <div className='flex justify-between w-full'>
                                <label className='ml-[10px]'>Total Penarikan</label>
                                <p className='text-[16px] text-[#EFB036] font-bold'>4.000.000</p>
                            </div>
                        </div>
                        <div className='w-[295px] h-[20px] flex md:w-full'>
                            <img src={iSaldo} alt="Komisi" />
                            <div className='flex justify-between w-full'>
                                <label className='ml-[10px]'>Sisa Saldo Komisi</label>
                                <p className='text-[16px] text-[#EFB036] font-bold'>4.000.000</p>
                            </div>
                        </div>
                    </div>
                    <label className='text-[16px] font-semibold mb-[10px]'>Filter</label>
                    <form className='flex w-full justify-center gap-[4px] mt-[10px]'>
                        <input
                            placeholder='Februari'
                            className='w-[153px] h-[38px] rounded-[10px] px-[50px] py-[10px] border border-[#BDBDBDBD] md:w-[40%] text-center'
                        />
                        <input
                            placeholder='2025'
                            className='w-[113px] h-[38px] rounded-[10px] px-[40px] py-[10px] border border-[#BDBDBDBD] md:w-[40%] text-center'
                        />
                        <div className='w-[61px] h-[38px] rounded-[10px] p-[10px] bg-[#EFB036] flex justify-center md:w-[20%]'>
                            <img src={iCari} alt="" />
                        </div>
                    </form>
                    <div className='w-[335px] h-[302px] mb-[20px] md:w-full'>
                        <table className='w-full mt-[20px]'>
                            <thead className=''>
                                <tr className='bg-[#EFB036] text-white border-[#EFB036]'>
                                    <th className="px-[20px] py-[10px] rounded-tl-[10px]">Tanggal</th>
                                    <th className="px-[20px] py-[10px]">Keterangan</th>
                                    <th className="px-[20px] py-[10px] rounded-tr-[10px]">Nominal</th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {data.map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <td className="border border-[#BDBDBD] h-[44px]">{item.tanggal}</td>
                                        <td className='border border-[#BDBDBD] h-[44px]'>{item.keterangan}</td>
                                        <td className="border border-[#BDBDBD] h-[44px]">{item.nominal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default SaldoKomisi