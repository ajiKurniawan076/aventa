import React, { useContext } from 'react'
import iBack from '../../src/assets/iBack.svg'
import { contextall } from '../../src/App'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const {nav} = useContext(contextall)
    const navigate = useNavigate()
    return (
        <div className='top-0 start-0 flex justify-center w-full fixed items-center'>
            <div className='w-[375px] md:max-w-[500px] lg:max-w-[650px] md:w-[80%] items-center relative lg:w-[60%] h-[60px] shadow-sm flex bg-white'>
                <button className='flex items-center' onC   lick={(e)=>{
                    e.preventDefault()
                    navigate(-1)
                }}><img src={iBack} alt="Back" className='absolute start-3 translate-y-0.5 object-none' /></button>
                <p className='text-center w-full'>{nav}</p>
            </div>
        </div>
    )
}

export default Navbar2