import React, { useContext, useEffect, useState } from 'react'
import Gambar from '../src/assets/Gambar.svg'
import Gambar2 from '../src/assets/Gambar2.svg'
import iPSam from '../src/assets/iPSam.svg'
import { Link } from 'react-router-dom'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App'

const ProdukReseller = () => {
    const [pilihKategori, setPilihKategori] = useState("Semua");
    const [data, setData] = useState([])
    const {setNav} = useContext(contextall)

    const handleButtonClick = (kategori) => {
        setPilihKategori(kategori)
    }

    useEffect(() => {
        const dataDummy = () => {
            return {
                kecantikan : [
                    { id: 1, img: Gambar, nama: "Serum Alpha ...", harga: 30000, komisi: 12000 },
                    { id : 1, img: Gambar, nama: "Pore Medic ...", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar, nama: "Serum dummy ...", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar, nama: "dummy Alpha ...", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar, nama: "dummy dummy ...", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar, nama: "data DUmmy ...", harga: 30000, komisi : 12000 },
                ],
                kesehatan : [
                    { id: 1, img: Gambar2, nama: "Calcium Core", harga: 30000, komisi: 12000 },
                    { id : 1, img: Gambar2, nama: "Purepras", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar2, nama: "Purepras dummy", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar2, nama: "dummy Purepras", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar2, nama: "Calcium Core dummy", harga: 30000, komisi : 12000 },
                    { id : 1, img: Gambar2, nama: "data DUmmy", harga: 30000, komisi : 12000 },
                ]
            }
        }
        setData(dataDummy())
        // console.log(dataDummy())
        setNav('Produk Reseller')
    }, [])


    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[12px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2/>
            <div className="flex flex-col md:w-full">
                <div className="flex gap-[5px] my-[15px] md:w-full justify-center mt-[70px]">
                    {/* Tombol Semua */}
                    <div
                        className={`w-[85px] h-[28px] rounded-[100px] border border-[#EFB036] flex justify-center items-center px-[5px] py-[20px] cursor-pointer
                            ${pilihKategori === "Semua" ? "bg-[#EFB036] text-white" : "bg-white text-black"}`}
                        onClick={() => handleButtonClick("Semua")}
                    >
                        <label>Semua</label>
                    </div>

                    {/* Tombol Kecantikan */}
                    <div
                        className={`w-[111px] h-[28px] rounded-[100px] border border-[#EFB036] flex justify-center items-center px-[5px] py-[20px] cursor-pointer
                            ${pilihKategori === "Kecantikan" ? "bg-[#EFB036] text-white" : "bg-white text-black"}`}
                        onClick={() => handleButtonClick("Kecantikan")}
                    >
                        <label>Kecantikan</label>
                    </div>

                    {/* Tombol Kesehatan */}
                    <div
                        className={`w-[108px] h-[28px] rounded-[100px] border border-[#EFB036] flex justify-center items-center px-[5px] py-[20px] cursor-pointer
                            ${pilihKategori === "Kesehatan" ? "bg-[#EFB036] text-white" : "bg-white text-black"}`}
                        onClick={() => handleButtonClick("Kesehatan")}
                    >
                        <label>Kesehatan</label>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between mb-[15px] md:px-[25px]'>
                    <label className='text-[14px] font-bold'>Kecantikan</label>
                    <p className='text-[14px] text-[#EFB036]'>Lihat Semua</p>
                </div>
                <div className='w-full place-items-center grid gap-[15px] grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    {data?.kecantikan?.map((item, i) => (
                        <Link to={`/DetailProduk/${item.id}`} key={i} className='w-[160px] h-[227px] rounded-[10px] border border-white shadow-lg'>
                            <img src={item.img} alt="Gambar" />
                            <div className='px-[10px] py-[10px] gap-[2px]'>
                                <div className='flex justify-between w-[140px]'>
                                    <p>{item.nama}</p>
                                    <img src={iPSam} alt="Panah" />
                                </div>
                                <p>Rp. {item?.harga?.toLocaleString('id-ID')}</p>
                            </div>
                            <div className='w-[116px] h-[26px] bg-[#EFB036] text-white rounded-r-[360px] py-[5px] px-[10px] flex justify-center items-center'>
                                <p>Komisi Rp. {item?.komisi?.toLocaleString('id-ID')}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between mb-[15px] mt-[25px] md:px-[25px]'>
                    <label className='text-[14px] font-bold'>Kesehatan</label>
                    <p className='text-[14px] text-[#EFB036]'>Lihat Semua</p>
                </div>
                <div className='w-full place-items-center grid gap-[15px] grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    {data?.kesehatan?.map((item, i) => (
                        <Link to="" key={i} className='w-[160px] h-[227px] rounded-[10px] border border-white shadow-lg'>
                            <img src={item.img} alt="Gambar" />
                            <div className='px-[10px] py-[10px] gap-[2px]'>
                                <div className='flex justify-between w-[140px]'>
                                    <p>{item.nama}</p>
                                    <img src={iPSam} alt="Panah" />
                                </div>
                                <p>Rp. {item?.harga?.toLocaleString('id-ID')}</p>
                            </div>
                            <div className='w-[116px] h-[26px] bg-[#EFB036] text-white rounded-r-[360px] py-[5px] px-[10px] flex justify-center items-center'>
                                <p>Komisi Rp. {item?.komisi?.toLocaleString('id-ID')}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProdukReseller