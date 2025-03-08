import React, { useEffect, useState } from 'react'
import Compo from '../src/assets/Compo.svg'
import iTarik from '../src/assets/iTarik.svg'
import iKlaim from '../src/assets/iKlaim.svg'
import Gambar from '../src/assets/Gambar.svg'
import iPSam from '../src/assets/iPSam.svg'
import iFoto2 from '../src/assets/iFoto2.svg'
import iFoto3 from '../src/assets/iFoto3.svg'
import Footer from './Component/Footer'
import { Link } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Fashion from '../src/assets/Fashion.svg'
import ProdukDigital from '../src/assets/ProdukDIgital.svg'
import Bayi from '../src/assets/Bayi.svg'
import Elektronik from '../src/assets/Elektronik.svg'
import RumahTangga from '../src/assets/RumahTangga.svg'
import Kecantikan from '../src/assets/Kecantikan.svg'
import Hobi from '../src/assets/Hobi.svg'
import Kesehatan from '../src/assets/Kesehatan.svg'
import Voucher from './Component/Voucher'
import Testimoni from './Component/Testimoni'


const Dashboard = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [modals, setModals] = useState(false)
    const [modalPro, setModalPro] = useState(false)

    useEffect(() => {
        const dataDummy = () => {
            return {
                terlaris: [
                    { id: 1, img: Gambar, nama: "Calcium Core", harga: 30000, komisi: 12000 },
                    { id: 2, img: Gambar, nama: "Purepras", harga: 30000, komisi: 12000 },
                    { id: 3, img: Gambar, nama: "Collagen", harga: 30000, komisi: 12000 },
                    { id: 4, img: Gambar, nama: "Vitamin C", harga: 30000, komisi: 12000 },
                    { id: 5, img: Gambar, nama: "Vitamin C", harga: 30000, komisi: 12000 },
                    { id: 6, img: Gambar, nama: "Vitamin C", harga: 30000, komisi: 12000 },
                ]
            }
        }
        setData({terlaris: dataDummy().terlaris.slice(0, 4)})
        console.log(dataDummy())
    }, [])

    useEffect(() => {
        const OpenModal = localStorage.getItem("Modal")
        console.log(localStorage.getItem("paketreseller"))
        if(localStorage.getItem("paketreseller") == "none") {setModal(true)}
        else {setModal(false)}
        
        console.log(modal)
    }, [])

    useEffect(() => {
        const OpenModals = localStorage.getItem("Modals")
        if (OpenModals === "true") {
            setModals(true)
            localStorage.removeItem("Modals")
            
        }
    }, [])

    useEffect(() => {
        const OpenModals = localStorage.getItem("modalPro")
        if (OpenModals === "true") {
            setModalPro(true)
            localStorage.removeItem("modalPro")
        }
    }, [])


    return (
        <div className='flex flex-col py-[16px] bg-white w-full items-start text-[12px] text-[#454545] min-h-full h-fit overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar />
            <div className='py-[10px] w-full flex justify-center'>
                {/* <img src={Compo} alt="Voucher" className='md:w-[85%]' /> */}
                <Voucher/>
            </div>
            <div className='flex gap-[15px] w-full justify-center'>
                <div className='flex flex-col justify-start border w-[160px] md:w-[40%] h-[86px] rounded-[10px] px-[20px] py-[10px] mt-[10px]'>
                    <label>Saldo Komisi</label>
                    <p className='text-[16px] font-bold text-[#EFB036]'>1.000.000</p>
                    <a href='/SaldoKomisi' className='flex gap-[5px] justify-end'>
                        <img src={iTarik} alt="Tarik" />
                        <p>Tarik</p>
                    </a>
                </div>
                <div className='flex flex-col justify-start border w-[160px] md:w-[40%] h-[86px] rounded-[10px] px-[20px] py-[10px] mt-[10px]'>
                    <label>Saldo Voucher</label>
                    <p className='text-[16px] font-bold text-[#EFB036]'>1.000.000</p>
                    <a href='/saldovoucher' className='flex gap-[5px] justify-end'>
                        <img src={iKlaim} alt="Klaim" />
                        <p>Klaim</p>
                    </a>
                </div>
            </div>
            {/* Kategori Produk */}
            <div className='w-full'>
                <div className='flex justify-between mb-[15px] md:px-[25px] mt-[30px]'>
                    <label className='text-[14px] font-bold'>Kategori Produk</label>
                    <p className='text-[14px] text-[#EFB036]'>Lihat Semua</p>
                </div>
                <div className='grid grid-cols-4 text-[12px] text-[#000000] gap-[5px]'>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={Fashion} alt="foto" />
                        </div>
                        <p>Fashion</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={Bayi} alt="foto" />
                        </div>
                        <p>Bayi & Anak</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={Elektronik} alt="foto" />
                        </div>
                        <p>Elektronik</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={ProdukDigital} alt="foto" />
                        </div>
                        <p>Produk Digital</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={RumahTangga} alt="foto" />
                        </div>
                        <p>Rumah Tangga</p>
                    </div>
                    <a href='/DetailKategori' className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={Kecantikan} alt="foto" />
                        </div>
                        <p>Kecantikan</p>
                    </a>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={Hobi} alt="foto" />
                        </div>
                        <p>Hobi & Koleksi</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <div className='flex justify-center item-center border border-[#DCDCDC] rounded-[10px] p-[5px] w-[80px] h-[80px]'>
                            <img src={Kesehatan} alt="foto" />
                        </div>
                        <p>Kesehatan</p>
                    </div>
                </div>
            </div>
            {/* terlaris */}
            <div className='w-full'>
                <div className='flex justify-between mb-[15px] md:px-[25px] mt-[30px]'>
                    <label className='text-[14px] font-bold'>Terlaris</label>
                    <a href='/ProdukReseller' className='text-[14px] text-[#EFB036]'>Lihat Semua</a>
                </div>
                <div className='w-full place-items-center grid gap-[15px] grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    {data?.terlaris?.map((item, i) => (
                        <Link to={`/DetailProduk/${item.id}`} key={i} className='w-[160px] h-[227px] rounded-[10px] border border-white shadow-lg'>
                            <img src={item.img} alt="Gambar" />
                            <div className='px-[10px] py-[10px] gap-[2px]'>
                                <div className='flex justify-between w-[140px]'>
                                    <p className='text-[#3B6790] font-bold line-clamp-1'>{item.nama}</p>
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
            <div className='flex flex-col w-full h-[270px] place-items-start p-[10px]'>
                <label className='mb-[20px] mt-[30px] text-[14px] font-bold w-fit'>Testimoni</label>
                <Testimoni/>
            </div>
            <div className='mx-[-20px] z-10'>
                <Footer />
            </div>
            {modal && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-center z-10'>
                    <div className='bg-white w-[335px] h-[246px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                        <p className='font-bold'>Selamat Datang di Aventa!</p>
                        <p>Segera aktifkan Aventa Artificial Intelligence, mesin penjualan online otomatis</p>
                        <p className='font-bold'>Aventa, Jagonya Jualan!</p>
                        <a href='/AktivasiAventa' className='w-[295px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white mt-[30px]'>
                            <p>Aktifkan Aventa Basic</p>
                        </a>
                    </div>
                </div>
            )}
            {modals && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-center z-10'>
                    <div className='bg-white w-[335px] h-[246px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                        <p className='font-bold'>Selamat Datang di Aventa!</p>
                        <p>Untuk memaksimalkan kesuksesan bisnis
                            online Anda, silakan lengkapi data profil Anda
                            di Aventa.
                        </p>
                        <a href='/Profil' className='w-[295px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white mt-[30px]'>
                            <p>Update Profil</p>
                        </a>
                    </div>
                </div>
            )}
            {modalPro && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-center z-10'>
                    <div className='bg-white w-[335px] h-[246px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                        <p className='font-bold'>Maaf, fitur ini hanya bisa diakses oleh</p>
                        <p>Akun Pro.</p>
                        <a href='/' className='w-[295px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white mt-[30px]'>
                            <p>Kembali</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard