import React, { useContext, useEffect } from 'react'
import Navbar2 from './Component/Navbar2'
import { contextall } from '../src/App'
import FB from '../src/assets/FB.svg'

const SocialLinks = () => {
    const {setNav} = useContext(contextall)

    useEffect(() => {
        setNav('Social Links')
    },[])

    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] md:text-[15px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide'>
            <Navbar2 />
            <div className='w-full border border-[#DCDCDC] mt-[70px] flex gap-10px'>
                <img src={FB} alt="" />
                <p>facebook.com/ <input type="text" /></p>
            </div>
        </div>
    )
}

export default SocialLinks