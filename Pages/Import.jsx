import React, { useContext, useEffect, useState } from 'react'
import { contextall } from '../src/App'

const Import = () => {
    const [modal, setModal] = useState(false)
    const {setNav} = useContext(contextall)

    useEffect(() => {
        setNav('Import')
    },[])

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <div className='w-full flex flex-col justify-center items-center min-h-screen'>
                <div className='w-[335px] h-[182px] gap-[20px] flex flex-col md:w-full'>
                    <div className='w-[335px] h-[118px] rounded-[10px] bg-[#EFEFEF] md:w-full flex justify-center text-center items-center'>
                        <p>file-import.vcf</p>
                    </div>
                    <div onClick={(e) => {
                        e.preventDefault()
                        setModal(true)
                    }}
                        className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white md:w-full '>
                        <p>Upload</p>
                    </div>
                </div>
            </div>
            {modal && (
                <div className='w-full h-full fixed bg-gray-600/80 top-0 start-0 flex justify-center items-center'>
                    <div className='bg-white w-[335px] h-[192px] rounded-[10px] py-[40px] px-[20px] shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-[30px]'>
                        <p>Import data kontak Anda telah Selesai!</p>
                        <a href='/  ' className='w-[295px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white'>
                            <p>Selesai</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Import