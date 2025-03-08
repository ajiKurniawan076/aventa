import React, { useContext, useEffect, useRef } from 'react'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App';

const PIN = () => {
    const inputsRef = useRef([]);
    const {setNav} = useContext(contextall)
    

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.match(/[0-9]/)) {
        if (index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
        } else {
        e.target.value = ""; // Kosongkan jika bukan angka
        }
    };

    useEffect(() => {
        setNav('PIN')
    },[])

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2 />
            <p className='text-[#828282] my-[40px] mt-[80px] w-full flex justify-center items-center'>Silakan Masukan PIN</p>
            <div className='w-full flex gap-[16px] justify-center items-center mb-[62px]'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleChange(e, index)}
                        className="w-[64px] h-[64px] border border-[#EFB036] rounded-[12px] text-center text-lg font-bold text-[24px]"
                    />
                ))}
            </div>
            <a href='/' className='w-full h-[44px] bg-[#EFB036] text-white rounded-[24.5px] flex justify-center items-center'>
                Selesai
            </a>
        </div>
    )
}

export default PIN