import React from 'react'
import iPanahM from '../src/assets/Landing Page/iPanahM.svg'
import Foto1 from '../src/assets/Landing Page/Foto1.svg'
import Foto2 from '../src/assets/Landing Page/Foto2.svg'
import Foto3 from '../src/assets/Landing Page/Foto3.svg'
import frame1 from '../src/assets/Landing Page/frame1.svg'
import iX from '../src/assets/Landing Page/iX.svg'


const LandingPage = () => {
    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[12px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide md:px-[30px]'>
            <h1 className='font-bold text-[24px] w-full flex justify-center mt-[20px]'>ANDA PASTI SUDAH TAHU!</h1>
            <div className='w-full flex justify-center items-center text-center'>
                <div className='text-[20px] flex flex-col justify-start items-start gap-[5px] mt-[30px] w-[269px] h-[160px]'>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iPanahM} alt="Panah" />
                        <p className='font-semibold'>Harga Beras <span className='text-[#FF3B30] font-bold'>NAIK</span></p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iPanahM} alt="Panah" />
                        <p className='font-semibold'>Harga Cabai <span className='text-[#FF3B30] font-bold'>NAIK!</span></p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iPanahM} alt="Panah" />
                        <p className='font-semibold'>Harga Pertamax <span className='text-[#FF3B30] font-bold'>NAIK!</span></p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iPanahM} alt="Panah" />
                        <p className='font-semibold'>Tarif Pajak <span className='text-[#FF3B30] font-bold'>NAIK!</span></p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iPanahM} alt="Panah" />
                        <p className='font-semibold'>Biaya Pendidikan <span className='text-[#FF3B30] font-bold'>NAIK!</span></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={Foto1} alt="Foto" />
            </div>
            <div className='w-full h-[62px] px-10 flex justify-center text-center items-center text-[24px] font-bold'>
                <p>SEMUA KEBUTUHAN POKOK <span className='text-[#EA0000]'>NAIK!!!</span></p>
            </div>
            <div className='w-full h-[78px] my-[50px] text-[30px] text-[#FF3B30] font-bold flex justify-center text-center items-center'>
                <p>BAGAIMANA DENGAN PENGHASILAN ANDA?</p>
            </div>
            <div className="text-[#000000] w-[375px] h-[144px] px-[19px] py-[20px] text-[18px] bg-[#EFB036] flex justify-center items-center">
                <div className="w-[333px] h-fit flex justify-center text-center ">
                    <p>
                        <span className="font-bold text-[20px]">PEMULA</span> DI SELURUH DUNIA 
                        SEDANG MENGHASILKAN UANG <span className="font-bold text-[20px]">JUTAAN RUPIAH </span> 
                        DARI RUMAH <span className="font-bold text-[20px]">DENGAN MUDAH</span>
                    </p>
                </div>
            </div>
            <div className='flex justify-center w-full px-[45px] mt-[7px]'>
                <div className='grid'>
                    <div className='flex justify-center items-center text-center text-[30px]'>
                        <img src={Foto2} alt="Foto" />
                        <div className='w-[148px] h-[120px] flex flex-col justify-center items-end'>
                            <p>ANDA</p>
                            <p>JUGA</p>
                            <p className='text-[#EA0000] font-bold'>BISA!!!</p>
                        </div>
                    </div>
                    <img src={frame1} alt="frame" className=' mt-[-25px]'/>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-fit px-[27px] text-[#464646] mt-[14px]'>
                <div className='w-[321px] h-[93px] flex justify-center items-center text-center text-[22px]'>
                    <p>
                        SAYA JUGA MAU <span className='font-bold text-[24px]'>MENGHASILKAN UANG DARI RUMAH TAPI...</span>
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-start text-start'>
                <div className='text-[16px] font-bold flex flex-col justify-start items-start gap-[10px] mt-[30px] w-[307px] h-fit'>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iX} alt="X" />
                        <p>SAYA SIBUK BEKERJA</p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iX} alt="X" />
                        <p>SAYA SIBUK NGURUS KELUARGA!</p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iX} alt="X" />
                        <p>SAYA SIBUK BELAJAR</p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iX} alt="X" />
                        <p>SAYA TIDAK PUNYA PENGALAMAN!</p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iX} alt="X" />
                        <p>SAYA TAKUT GAGAL!</p>
                    </div>
                    <div className='flex gap-[15px] justify-start '>
                        <img src={iX} alt="X" />
                        <p>SAYA GAPTEK!</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center text-center'>
                <div className='text-[16px] flex flex-col justify-center items-center mt-[25px] w-[335px] h-[82px] rounded-[10px] px-[15px] py-[20px] bg-[#FF3B30] text-white font-bold md:w-full'>
                    <p>DAN SAYA TIDAK TAHU </p><p> BAGAIMANA CARA MEMULAINYA</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-[40px]'>
                <p className='text-[32px] font-bold'>TENANG!!!</p>
                <img src={Foto3} alt="Foto" className='mt-[-25px]'/>
            </div>
            <div className='w-full h-fit flex justify-center items-center text-center px-[19px]'>
                <div className='w-[337px] h-[126px] text-[16px]'>
                    <p>TEKNOLOGI INFORMASI TELAH</p>
                    <p>BERKEMBANG PESAT. DENGAN SEGALA </p>
                    <p> KECANGGIHANNYA, </p>
                    <p> BISNIS TERMUDAH DOT KOM </p>
                    <p> AKAN MENJALANKAN BISNIS ONLINE </p>
                    <p> ANDA <span className='text-[#DE9114] font-bold'>SECARA OTOMATIS</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage