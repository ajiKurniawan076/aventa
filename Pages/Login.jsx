import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [lihatPassword, setLihatPassword] = useState(false)
    const [remember, setRemember] = useState(false)

    const handleLogin = async () => {
        const data = {
            email: username,
            password: password
        }
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", data)
            if (response.status === 201 || response.status === 200) {
                localStorage.setItem('idreseller', response.data.user.id)
                localStorage.setItem('paketreseller', response.data.user.paket)
                toast.success('Berhasil login!!! '+ response.data.user.id)
                setTimeout(() => { navigate('/')}, 1000)
            } else {
                toast.error("Terjadi kesalahan, coba lagi.")
            }
            handleModal()
        } catch (error) {
            // toast.error("Gagal Melakukan Registrasi");
        }
    }

    useEffect(() => {
            const saveRemember = localStorage.getItem("RememberMe") === "true"
            setRemember(saveRemember)
        }, [])
        
    const handleCheckboxChange = () => {
        const newValue = !remember
        setRemember(newValue)
        localStorage.item("RememberMe", newValue)
    }

    // const handleModal = () => {
        
    //     localStorage.setItem("Modal", "true")
    //     navigate("/")
    // }
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <ToastContainer/>
            <div className='grid gap-[10px] place-items-start my-[30px]'>
                <p className='text-[#DE9114] font-bold text-[16px]'>Selamat Datang</p>
                <p>Silakan Login!</p>
            </div>
            <form className='w-full h-fit'>
                <p>User ID</p>
                <input
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    placeholder='Masukan ID'
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
                <p className='mt-[15px]'>Captcha</p>
                <div className='flex w-full gap-[10px]'>
                    <div className='w-[97px] h-[44px] rounded-[10px] py-[20px] px-[13px] bg-[#EFEFEF] flex justify-center items-center mt-[10px]'>
                        <p className='font-bold italic'>AG78GS</p>
                    </div>
                    <input
                        placeholder='Masukan Captcha'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] text-start mt-[10px]'
                    />
                </div>
                <div className='flex justify-start gap-[10px] items-center text-center my-[10px]'>
                    <input type='checkbox' checked={remember} onChange={() => setRemember(!remember)} className='w-[15px] h-[15px] border border-gray-400 cursor-pointer' />
                    <p>Ingatkan Saya</p>
                </div>
            </form>
            <div className='h-fit w-full flex justify-center'>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        // handleModal()
                        handleLogin()
                    }}
                    className='w-[335px] h-[44px] rounded-[360px] bg-[#EFB036] text-white text-[14px] mt-[15px] md:w-full md:mx-[50px] flex justify-center items-center'>
                    <p>Login</p>
                </button>
            </div>
            <div className='h-fit w-full flex flex-col gap-[10px] justify-center items-center mt-[15px]'> 
                <a href='/Registrasi'>Belum Punya Akun?</a>
                <p className='text-[#BDBDBD]'>Atau</p>
                <a href='/LupaAkun'>Lupa Kata Sandi?</a>
            </div>
        </div>
    )
}

export default Login