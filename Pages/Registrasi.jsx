import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Registrasi = () => {
    const {id} = useParams()
    const [nama, setNama] = useState("")
    const [nomor, setNomor] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pin, setPin] = useState("")
    const [referal, setReferal] = useState("")
    const [lihatPassword, setLihatPassword] = useState(false)
    const [lihatPin, setLihatPin] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const refUpRef = useRef(null)
    useEffect(()=>{
        const fetch = async () =>{
            await axios.get('http://localhost:5000/api/reseller').then(
                response => {
                    const cari = response.data.find(item => item.ref.toLowerCase() == id.toLowerCase())
                    setUser(cari)
                }
            )
        }
        fetch()
    },[])
    const handleRegist = async (e) => {
        e.preventDefault();
        if (!isChecked) {
            toast.error("Anda harus menyetujui syarat & ketentuan");
            return;
        }
        if (password.length < 6) {
            toast.error("Password harus lebih dari 6 karakter");
            return;
        }
        if (pin.length !== 4) {
            toast.error("PIN harus terdiri dari 4 angka");
            return;
        }

        const data = { nama, kontak: nomor, email, password, pin, refUp: refUpRef.current.value.toUpperCase() };
        try {
            const response = await axios.post("http://localhost:5000/api/auth/registrasi", data);
            if (response.status === 201 || response.status === 200) {
                toast.success("Berhasil Melakukan Registrasi");
                setTimeout(() => navigate("/Login"), 1000);
            } else {
                toast.error("Terjadi kesalahan, coba lagi.");
            }
        } catch (error) {
            toast.error("Gagal Melakukan Registrasi");
        }
    };
    
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <ToastContainer/>
            <div className='grid gap-[10px] place-items-start my-[30px]'>
                <p className='text-[#DE9114] font-bold text-[16px]'>Selamat Datang</p>
                <p>Silakan Isi Form Pendaftaran!</p>
            </div>
            <form className='w-full md:w-full h-fit'>
                <p>Nama Lengkap</p>
                <input
                    value={nama}
                    onChange={(e)=>{setNama(e.target.value)}}
                    placeholder='Destya'
                    className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] text-start mt-[10px]'
                />
                <p className='mt-[15px]'>Nomor Handphone</p>
                <input
                    value={nomor}
                    onChange={(e)=>{setNomor(e.target.value)}}
                    placeholder='Masukan Nomor'
                    className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] text-start mt-[10px]'
                />
                <p className='mt-[15px]'>Email</p>
                <input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder='Masukan Email'
                    className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] text-start mt-[10px]'
                />
                <p className='mt-[15px]'>Kata Sandi</p>
                <div className='w-full h-fit relative'>
                    <input
                        value={password}
                        type={lihatPassword ? "text" : "password"}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder='Masukan Kata Sandi'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] text-start mt-[10px] '
                    />
                    <button
                        type='button'
                        onClick={() => setLihatPassword(!lihatPassword)}
                        className='absolute top-1/2 mt-[5px] right-4 transform -translate-y-1/2'
                    >
                        {lihatPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </button>
                </div>
                <p className='mt-[15px]'>PIN</p>
                <div className='w-full h-fit relative'>
                    <input
                        type={lihatPin ? "text" : "password"}
                        value={pin}
                        onChange={(e)=>{setPin(e.target.value)}}
                        placeholder='Masukan 4 Angka'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] text-start mt-[10px]'
                    />
                    <button
                        type='button'
                        onClick={() => setLihatPin(!lihatPin)}
                        className='absolute top-1/2 mt-[5px] right-4 transform -translate-y-1/2'
                    >
                        {lihatPin ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </button>
                </div>
                <div className='w-[335px] md:w-full h-[44px] rounded-[10px] py-[20px] px-[13px] bg-[#EFEFEF] flex justify-start items-center mt-[15px]'>
                    <input ref={refUpRef} className='font-bold italic' type='text' disabled value={id}/>
                </div>
                <div className='w-[335px] md:w-full h-[44px] rounded-[10px] py-[20px] px-[13px] bg-[#EFEFEF] flex justify-start items-center mt-[15px]'>
                    <p className='font-bold italic'>{user?.nama}</p>
                </div>
                <div className='flex justify-start gap-[10px] items-center text-center my-[10px]'>
                    <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='w-[15px] h-[15px] border border-gray-400 cursor-pointer' />
                    <p>Terima Syarat & Ketentuan</p>
                </div>
                <div className='h-fit w-full flex justify-center'>
                    <button onClick={handleRegist} className='w-[335px] h-[44px] rounded-[360px] bg-[#EFB036] text-white text-[14px] mt-[20px] md:w-full md:mx-[50px] flex justify-center items-center'>
                        <p>Registrasi</p>
                    </button>
                </div>
                <div className='w-full flex justify-center mt-[15px]'>
                    <a href="/Login">Sudah Punya Akun?</a>
                </div>
            </form>
        </div>
    )
}

export default Registrasi