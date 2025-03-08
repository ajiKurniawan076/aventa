import React, { useContext, useEffect, useState } from 'react'
import Navbar2 from './Component/Navbar2'
import { useParams } from 'react-router-dom'
import Gambar3 from '../src/assets/Gambar3.svg'
import iFb from '../src/assets/iFb.svg'
import iWa from '../src/assets/iWa.svg'
import iSalin from '../src/assets/iSalin.svg'
import iCtg from '../src/assets/iCtg.svg'
import { contextall } from '../src/App'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'


const DetailProduk = () => {
    const { id } = useParams()
    const [modal, setModal] = useState(false)
    const [modals, setModals] = useState(false)
    const {setNav} = useContext(contextall)
    const [kontak, setkontak] = useState([])
    useEffect(() => {
        const fetch = async() => {
            await axios.get('http://localhost:5000/api/kontak').then(
                response => { 
                   const filter =  response.data.find(item => item._id == '67cabce057cc3e0f200362a7')
                    setkontak(filter.kontak)
                    console.log (filter)
                }
            )
        }
        fetch()
        setNav('Detail Produk')
    },[])

    // const broadcastPesan = async () => {
    //     const token = "UWB2joUESp8ll6NVBjpn8cHRfYGXH1DcCAdd5q5LgxgjsnoBDhlIBdK";
    //     const secretKey = "ocZLjhs2";
    //     let pesan = []
    //     console.log(kontak)
    //     kontak.map((item, i ) => 
    //       item.nomor != "No Number" &&  pesan.push({phone :  item.nomor, pesan : "Hi "+item.nama+ ' '+i})

    // )
    //     await axios.post('https://bdg.wablas.com/api/v2/send-message', pesan, {
    //         headers: {
    //           Authorization: `${token}.${secretKey}`,
    //           "Content-Type": "application/json",
    //         },
    //       })
    //     console.log(pesan)
    // }
    
    const broadcastPesan = async () => {
            console.log('abc')
            const url = '/api3';
            const headers = {
              'mo-userid': 'C2973',
              'mo-secret': '8b06029491b820bac8f1be2d30d15afd91596dade7b5e43083d4f6f745431ff8',
          };
            
            
            
            // await axios.post(url, fdata, {
            //    headers
            //   }).then(Response => console.log(Response.data))
            
            //   kontak.map((item, i) => {
            // const fdata = new FormData()
            // fdata.append("inquiry", 'SEND.MSG')
            // fdata.append("account", '6283869753626')
            // fdata.append("contact", '6288232943147')
            // fdata.append("content", 'HAI ' + item.nama +' INI SAYA')
            // fdata.append("content_type", 0)
            // fdata.append("prior", 10)
            // const post = async() =>{
            //   await axios.post(url, fdata, {
            //     headers
            //    }).then(Response => Response.data.result == 'success' ? toast.success('berhasil broadcast, tunggu sampai terkirim') : toast.error("Gagal Broadcast Pesan"))
            // }
            // item.nomor != "No Number" && item.nomor!=null && post()
            //   } 
            // )
            for (let i = 0; i < 10; i++) {
            
                    const fdata = new FormData();
                    fdata.append("inquiry", "SEND.MSG");
                    fdata.append("account", "6283869753626");
                    fdata.append("contact", "6285712205373");
                    fdata.append("content", "HAI AJI INI SAYA");
                    fdata.append("content_type", 0);
                    fdata.append("prior", 10);
            
                    const post = async () => {
                        try {
                            const response = await axios.post(url, fdata, { headers });
                            response.data.result === "success"
                                ? toast.success("berhasil broadcast, tunggu sampai terkirim")
                                : toast.error("Gagal Broadcast Pesan");
                                console.log(response.data)
                        } catch (error) {
                            toast.error("Error mengirim pesan");
                        }
                    };
            
                    post();
                
            }
            setModal(false)
    }
    
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2 />
            <div className='w-[312px] h-[150px] gap-[15px] mt-[70px] flex md:w-full md:items-center'>
                <div className='md:w-full md:flex md:justify-end md:mx-[10px]'>
                    <img src={Gambar3} alt="Gambar" className='' />
                </div>
                <div className='flex flex-col gap-[15px] md:w-full md:mx-[10px]'>
                    <label className='text-[#3B6790] font-bold'>Serum Alpha Aributin</label>
                    <div className='flex flex-col gap-[2px] w-[70px] h-[36px] justify-start md:w-full'>
                        <p className='text-[12px]'>Harga</p>
                        <p className='font-semibold'>Rp. 30.000</p>
                    </div>
                    <div className='flex flex-col gap-[2px] w-[113px] h-[36px] justify-start md:w-full'>
                        <p className='text-[12px]'>Komisi Yang didapat</p>
                        <p className='font-semibold'>Rp. 12.000</p>
                    </div>
                </div>
            </div>
            <div className='w-[310px] h-[70px] gap-[10px] my-[20px] flex md:w-full md:justify-center md:gap-[15px]'>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={Gambar3} alt="Gambar" />
                </div>
            </div>
            <div className='grid gap-[20px] mb-[30px] md:w-full md:px-[20px]'>
                <div className='w-[335px] h-[43px] gap-[5px]'>
                    <label className='font-semibold'>Berat Produk</label>
                    <p>55 Gr</p>
                </div>
                <div className='w-[335px] h-[123px] gap-[5px] text-justify flex flex-col md:w-full md:h-[100px]'>
                    <label className='font-semibold'>Deskripsi</label>
                    <p className='md:w-full'>Serum Alpha Arbutin adalah serum perawatan kulit yang mengandung alpha arbutin, bahan aktif yang dikenal efektif untuk mencerahkan kulit dan menyamarkan hiperpigmentasi sepeti flek hitam dan bekas jerawat</p>
                </div>
                <div className='w-[70px] h-[58px] flex flex-col gap-[10px]'>
                    <label className='font-semibold'>Bagikan</label>
                    <div className='flex w-[70px] h-[30px] gap-[10px]'>
                        <img src={iFb} alt="Facebook" />
                        <img src={iWa} alt="Whatsapp" />
                    </div>
                </div>
                <div className='w-[335px] h-[72px] flex flex-col gap-[10px] md:w-full'>
                    <label className='font-semibold'>Link Web Promosi</label>
                    <div className='w-[335px] h-[44px] flex justify-between px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'>
                        <p>www.bisnisdarirumah/serum/destya</p>
                        <img src={iSalin} alt="Salin" />
                    </div>
                </div>
                <div className='w-[335px] h-[72px] flex flex-col gap-[10px] md:w-full'>
                    <label className='font-semibold'>Link Web Promosi</label>
                    <div className='w-[335px] h-[44px] flex justify-between px-[20px] py-[13px] border border-[#EFEFEF] md:w-full'>
                        <p>www.youtube.com/destya</p>
                        <img src={iSalin} alt="Salin" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[10px] mb-[10px] h-full mt-auto md:w-full md:px-[20px]'>
                <div
                    onClick={(e) => {
                        e.preventDefault()
                        setModal(true)
                    }}
                    className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border border-[#EFB036] md:w-full'
                >
                    <p>Promosi Otomatis</p>
                </div>
                <a href='/DaftarPesanan' className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white md:w-full '>
                    <p>Order</p>
                </a>
            </div>
            {modal && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-end'>
                    <div className={`h-[335px] w-[375px] rounded-t-[20px] bg-white flex flex-col place-items-center transition-transform duration-300 ${modal ? "translate-y-0" : "translate-y-full"}`}>
                        <p className='my-[30px]'>Promosi Otomatis</p>
                        <div className='w-[335px] h-[152px] gap-[10px] flex flex-col justify-center mb-[30px]'>
                            <div className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[5px] flex justify-between border border-[#EFB036] items-center'>
                                <p>Whatsapp</p>
                                <img src={iCtg} alt="Centang" />
                            </div>
                            <div className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[5px] flex justify-between items-center'>
                                <p>Facebook</p>
                            </div>
                            <div className='w-[335px] h-[44px] rounded-[10px] px-[20px] py-[5px] flex justify-between items-center'>
                                <p>Instagram</p>
                            </div>
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                // setModals(true)
                                broadcastPesan()
                            }}
                            className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white'>
                            Promosi
                        </button>
                    </div>
                </div>
            )}

            {modals && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-center'>
                    <div className='bg-white w-[335px] h-[228px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-[20px]'>
                        <p className='text-center'>Maaf, Anda belum memiliki Data Kontak tersimpan. Silakan klik tombol dibawah untuk menambahkan Data Kontak Anda</p>
                        <a
                            href='/TambahDataKontak'
                            className='w-[295px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white'>
                            <p>Tambah Daftar Kontak</p>
                        </a>
                    </div>
                </div>
            )}
            <ToastContainer/>
        </div>
    )
}

export default DetailProduk