import React, { useEffect, useState } from 'react'
import Footer from './Component/Footer'

const Mitra = () => {
    const [data, setData] = useState()
    const [pilihMitra, setPilihMitra] = useState(true)

    const Pilih = (mitra) => {
        setPilihMitra(mitra)
        // console.log("coba")
    }

    useEffect(() => {
        const dummyData = () => {
            return {
                mitra: [,
                    { id: 1, IDAkun : 'BDR111', nama : 'sinta', nomorHp: "089235212333"},
                    { id: 2, IDAkun : 'BDR112', nama : 'sasa', nomorHp: "089235212333"},
                    { id: 3, IDAkun : 'BDR113', nama : 'tata', nomorHp: "089235212333"},
                    { id: 4, IDAkun : 'BDR114', nama : 'iin', nomorHp: "089235212333"},
                    { id: 5, IDAkun : 'BDR115', nama : 'tasi', nomorHp: "089235212333"},
                    { id: 6, IDAkun : 'BDR116', nama : 'sita', nomorHp: "089235212333"},
                ],
                CalonMitra: [
                    { id: 1, IDAkun : 'CLN121', nama : 'Susa', nomorHp: "089235212333"},
                    { id: 2, IDAkun : 'CLN122', nama : 'Susi', nomorHp: "089235212333"},
                    { id: 3, IDAkun : 'CLN123', nama : 'Susu', nomorHp: "089235212333"},
                    { id: 4, IDAkun : 'CLN124', nama : 'Suse', nomorHp: "089235212333"},
                    { id: 5, IDAkun : 'CLN125', nama : 'Suso', nomorHp: "089235212333"},
                    { id: 6, IDAkun : 'CLN126', nama : 'Susano', nomorHp: "089235212333"},
                ]
            }
        }
        setData(dummyData())
        console.log(dummyData())
    },[])
    return (
        <div className='flex flex-col bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide'>
            <div className='flex w-full h-fit'>
                <button
                    onClick={()=> {Pilih(true)}}
                    className={`w-[50%] h-[38px] md:h-[45px] lg:h-[55px] flex justify-center items-center  ${pilihMitra === true ? "border-b border-b-[#464646]" : "border-b border-b-[#BDBDBD]"}`}>
                    <p>Calon Mitra</p>
                </button>
                <button
                    onClick={()=> {Pilih(false)}}
                    className={`w-[50%] h-[38px] md:h-[45px] lg:h-[55px] flex justify-center items-center ${pilihMitra === false ? "border-b border-b-[#464646]" : "border-b border-b-[#BDBDBD]"}`}>
                    <p>Mitra</p>
                </button>
            </div>
            {pilihMitra === true ?
                // nilai true
                <>
                    <div className='w-full h-[302px] p-[20px]'>
                        <table className='w-full'>
                            <thead className=''>
                                <tr className='bg-[#EFB036] text-white border-[#EFB036]'>
                                    <th className="px-[20px] py-[10px] rounded-tl-[10px]">ID Akun</th>
                                    <th className="px-[20px] py-[10px]">Nama</th>
                                    <th className="px-[20px] py-[10px] rounded-tr-[10px]">No. Telepon</th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {data?.CalonMitra?.map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <td className="border border-[#BDBDBD] h-[44px]">{item.IDAkun}</td>
                                        <td className='border border-[#BDBDBD] h-[44px]'>{item.nama}</td>
                                        <td className="border border-[#BDBDBD] h-[44px]">{item.nomorHp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </>
                :
                // nilai False
                <>
                    <div className='w-full h-[302px] p-[20px]'>
                        <table className='w-full'>
                            <thead className=''>
                                <tr className='bg-[#EFB036] text-white border-[#EFB036]'>
                                    <th className="px-[20px] py-[10px] rounded-tl-[10px]">ID Akun</th>
                                    <th className="px-[20px] py-[10px]">Nama</th>
                                    <th className="px-[20px] py-[10px] rounded-tr-[10px]">No. Telepon</th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {data?.mitra?.map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <td className="border border-[#BDBDBD] h-[44px]">{item.IDAkun}</td>
                                        <td className='border border-[#BDBDBD] h-[44px]'>{item.nama}</td>
                                        <td className="border border-[#BDBDBD] h-[44px]">{item.nomorHp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </>
            }
            <Footer />
        </div>
    )
}

export default Mitra