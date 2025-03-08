import React, { useState } from 'react';

const LupaAkun = () => {
    const [otpSent, setOtpSent] = useState(false);
    const [timer, setTimer] = useState(30);

    const startTimer = () => {
        setOtpSent(true);
        let timeLeft = 30;
        setTimer(timeLeft);

        const countdown = setInterval(() => {
            timeLeft -= 1;
            setTimer(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(countdown);
                setOtpSent(false);
            }
        }, 1000);
    };

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <div className='grid gap-[10px] place-items-start my-[30px]'>
                <p className='text-[#DE9114] font-bold text-[16px]'>Selamat Datang</p>
                <p>Silakan Ubah Password Anda!</p>
            </div>
            <form className='w-[335px] h-fit'>
                <p>Masukan Email / No. Hp</p>
                <input
                    placeholder='Masukan Email / No. Hp'
                    className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-[40%] text-start mt-[10px]'
                />
                <p className='mt-[15px]'>Kode OTP</p>
                <div className="flex items-center gap-3">
                    <input
                        placeholder='Kode'
                        className='w-full h-[44px] rounded-[10px] px-[20px] py-[13px] border border-[#EFEFEF] md:w-[40%] text-start mt-[10px]'
                    />
                    <button
                        type="button"
                        onClick={startTimer}
                        disabled={otpSent}
                        className={`h-[44px] px-4 rounded-[10px] text-white text-[14px] mt-[10px] ${
                            otpSent ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#EFB036]'
                        }`}
                    >
                        {otpSent ? `${timer}s` : "Kirim OTP"}
                    </button>
                </div>
            </form>
            <div className='h-fit w-full flex justify-center'>
                <a href='/Login' className='w-[335px] h-[44px] rounded-[360px] bg-[#EFB036] text-white text-[14px] mt-[20px] md:w-full md:mx-[50px] flex justify-center items-center'>
                    <p>Ubah Sandi</p>
                </a>
            </div>
        </div>
    );
};

export default LupaAkun;
