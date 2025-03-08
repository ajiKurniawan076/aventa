import React, { useContext, useEffect, useState } from 'react'
import buktiTF from '../src/assets/buktiTF.svg'
import Navbar2 from './Component/Navbar2'
import { useNavigate } from 'react-router-dom'
import { contextall } from '../src/App'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const UploadBuktiAventa = () => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    const {setNav} = useContext(contextall)
    const [invgen, setinvgen] = useState(0)
    const [paket, setPaket] = useState({})

    const HandleKlik = () => {
        localStorage.setItem("Modals", "true")
        navigate("/")
        // console.log('coba')
    }
    useEffect(() => {
        setNav('Upload Bukti')
        const fetch = async() => {
            await axios.get('http://localhost:5000/api/upgradepaket').then(
                response => setinvgen(response.data.length)
            )
            await axios.get('http://localhost:5000/api/paket').then(
                response => {
                    const paketx = response.data.find(item => item.namaPaket == 'Basic')
                    setPaket(paketx)
                }
            )
        }
        fetch()
    },[])

    const handleAktivasi = async() => {
        const data = {
            reseller: localStorage.getItem("idreseller"),
            invoice: "inv"+invgen,
            paket: paket._id,
            nominal: paket.harga,
            pembayaran: paket.harga,
            metodePembayaran: "Transfer",
          }
          console.log(data)
        await axios.post('http://localhost:5000/api/upgradepaket', data).then(
            response => {
                response.status == 200 || response.status == 201 ? toast.success("Berhasil Aktifasi") : toast.error("Gagal Aktifasi")
            }
        )
    }

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2 />
            <div className='flex w-full justify-center mt-[35px]'>
                <div className='w-[200px] h-[448px] mt-[47px]'>
                    <img src={buktiTF} alt="BuktiTF" />
                </div>
            </div>
            <div className='h-full w-full flex justify-center md:mt-auto'>
                <div onClick={(e) => {
                    e.preventDefault()
                    handleAktivasi()
                    setModal(true)
                }} className='w-[335px] h-[44px] rounded-[360px] border border-[#EFB036] bg-[#EFB036] text-[14px] mt-[20px] flex justify-center items-center text-white md:w-full md:mx-[50px]'>
                    <p>Upload Bukti Transfer</p>
                </div>
            </div>
            {modal && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-end'>
                    <div className='bg-white w-[335px] h-[264px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
                        <div className='flex flex-col place-items-center items-center text-center'>
                            <p className='font-bold'>Selamat Datang di Aventa!</p>
                            <p>Aventa Basic akan segera aktif. Aventa AI siap
                                bekerja untuk Anda, dan rasakan kemudahan
                                berjualan online
                            </p>
                            <p className='font-bold'>Aventa, Jagonya Jualan!</p>
                            <div onClick={HandleKlik}  className='w-[295px] h-[44px] py-[5px] px-[30px] rounded-[360px] bg-[#EFB036] text-white flex items-center justify-center mt-[30px]'>
                                <p>Selesai</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer/>
        </div>
    )
}

export default UploadBuktiAventa