import React, { useEffect, useState } from 'react'
import iFoto from '../src/assets/iFoto.svg'
import iEdit from '../src/assets/iEdit.svg'
import iDataK from '../src/assets/iDataK.svg'
import iSosial from '../src/assets/iSosial.svg'
import UUser from '../src/assets/UUser.svg'
import Upass from '../src/assets/Upass.svg'
import UPin from '../src/assets/UPin.svg'
import iSyarat from '../src/assets/iSyarat.svg'
import iKebijakan from '../src/assets/iKebijakan.svg'
import iPusat from '../src/assets/iPusat.svg'
import Footer from './Component/Footer'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineCopy } from 'react-icons/ai'
import axios from 'axios'

const Profil = () => {
    const [reseller,setreseller] = useState({})
    useEffect(()=>{
        const fetch = async() => {
            await axios.get("http://localhost:5000/api/reseller").then(
                response => {
                    const cari = response.data.find(item=>item._id == localStorage.getItem("idreseller"))
                    setreseller(cari)
                    console.log(response)
                }
            )
        }
        fetch()
    },[])
    const handleCopy = async (e) => {
        console.log(reseller)
        e.preventDefault()
        try {
            await navigator.clipboard.writeText("https://aventa-ai.vercel.app/"+reseller?.ref);
          } catch (err) {
            console.error("Failed to copy:", err);
          }
    }
    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] md:text-[15px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide'>
            <div className='flex flex-col w-full px-[20px] mb-[90px]'>
                <div className='w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px]'>
                    <div className='w-full h-[70px] flex justify-start m-[20px]'>
                        <div className='flex gap-[15px] justify-center items-center'>
                            <img src={iFoto} alt="Foto" className='h-[70px] w-[70px] md:h-[85px] md:w-[85px] lg:h-[1000px] lg:w-[100px]' />
                            <div >
                                <p className='text-[16px]'>Destya Ayu Sinta Putri</p>
                                <p className='text-[#3B6790]'>BDR4823001</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] mt-[20px] m-[20px]'>
                        <div className='flex justify-between'>
                            <p>Tanggal Bergabung</p>
                            <p className='text-[#3B6790]'>04 Februari 2025</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Jenis Akun</p>
                            <p className='text-[#3B6790]'>Basic</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Nama Samaran</p>
                            <p className='text-[#3B6790]'>Destya Ayu Sinta Putri</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>No. Telepon</p>
                            <p className='text-[#3B6790]'>089673166105</p>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>Link Referal</p>
                            <div className='w-full flex'>
                                <p className='text-[#3B6790] p-1.5 rounded-s-lg px-[10px] bg-gray-400/30 w-[90%]'>https://aventa-ai.vercel.app</p>
                                <button onClick={handleCopy} className='w-[10%] bg-yellow-500/80 rounded-e-lg flex justify-center items-center'> <AiOutlineCopy/> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px]'>
                    <div className='flex flex-col gap-[15px] p-[20px]'>
                        <p className='font-bold'>Data Diri</p>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Nama Lengkap</p>
                            <p className='text-[#3B6790]'>Destya Ayu Sinta Putri</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Tempat, Tanggal Lahir</p>
                            <p className='text-[#3B6790]'>Kab. Semarang, 17 Juni 2003</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px]'>
                    <div className='flex flex-col gap-[15px] p-[20px]'>
                        <p className='font-bold'>Data Rekening</p>
                        <div className='flex flex-col gap-[5px]'>
                            <p>BANK</p>
                            <p className='text-[#3B6790]'>BCA</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Nomor Rekening</p>
                            <p className='text-[#3B6790]'>890872632310</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Cabang / Unit</p>
                            <p className='text-[#3B6790]'>890872632310</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px]'>
                    <div className='flex flex-col gap-[15px] p-[20px]'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Alamat</p>
                            <div className='flex gap-[5px]'>
                                <a href='/EditData' className='text-[#EFB036]'>Edit Data</a>
                                <img src={iEdit} alt="Edit" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Provinsi</p>
                            <p className='text-[#3B6790]'>Jawa Tengah</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Kab / Kota</p>
                            <p className='text-[#3B6790]'>Salatiga</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Kecamatan</p>
                            <p className='text-[#3B6790]'>Sidorejo</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Kelurahan</p>
                            <p className='text-[#3B6790]'>Sidorejo</p>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p>Alamat</p>
                            <p className='text-[#3B6790]'>Jl. Wahid Hasyim</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px] p-[20px]'>
                    <p className='font-bold'>Data Kontak</p>
                    <a href='/TambahDataKontak' className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={iDataK} alt="Tambah Data Kontak" />
                        <p>Tambah Data Kontak</p>
                    </a>
                </div>
                <div className='flex flex-col gap-[20px] w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px] p-[20px]'>
                    <p className='font-bold'>Sosial Links</p>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={iSosial} alt="Tambah Sosial Links" />
                        <p>Tambah Sosial Links</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px] w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px] p-[20px]'>
                    <p className='font-bold mb-[10px]'>Keamanan</p>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={UUser} alt="Update Username" />
                        <p>Update Username</p>
                    </div>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={Upass} alt="Update Password" />
                        <p>Update Password</p>
                    </div>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={UPin} alt="Update PIN" />
                        <p>Update PIN</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px] w-full h-fit my-[10px] shadow-sm shadow-gray-500 rounded-[10px] p-[20px]'>
                    <p className='font-bold mb-[10px]'>Tentang</p>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={iSyarat} alt="Syarat & Ketentuan" />
                        <p>Syarat & Ketentuan</p>
                    </div>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={iKebijakan} alt="Kebijakan Provasi" />
                        <p>Kebijakan Provasi</p>
                    </div>
                    <div className='flex justify-start items-center gap-[10px] border border-[#EFB036] px-[30px] py-[5px] rounded-[360px] h-[44px] md:h-[46px] lg:h-[48px]'>
                        <img src={iPusat} alt="Pusat Bantuan" />
                        <p>Pusat Bantuan</p>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-[20px] mt-[20px]'>
                    <div className='flex justify-center items-center w-full h-[44px] bg-[#476E95] rounded-[360px] text-white'>
                        <p>Upgrade Premium</p>
                    </div>
                    <div className='flex justify-center items-center w-full h-[44px] border-2 border-[#476E95] rounded-[360px] text-[#476E95]'>
                        <p>Daftar Supllier</p>
                    </div>
                    <div className='flex justify-center items-center w-full h-[44px] gap-[7px] border-2 border-[#EFB036] rounded-[360px]'>
                        <FaWhatsapp className='w-[20px] h-[20px]' />
                        <p>Aventa Via Whatshapp</p>
                    </div>
                    <div className='flex justify-center items-center w-full h-[44px] bg-[#EFB036] rounded-[360px] text-white'>
                        <p>Keluar</p>
                    </div>
                </div>
            </div>
            <Footer className='p-[100px]' />
        </div>
    )
}

export default Profil