import React, { useContext, useEffect, useState } from 'react'
import iKontak from '../src/assets/iKontak.svg'
import Navbar2 from './Component/Navbar2'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { contextall } from '../src/App'
import VCF from "vcf";

const TambahDataKontak = () => {
    const { setNav } = useContext(contextall)
    const kontakRef = useRef(null)
    const [kontak, setKontak] = useState([])
    const choseFile = (e) => {
        e.preventDefault();
        kontakRef.current.click();  // Trigger file input click
      };
    
    const submit = (e) => {
        e.preventDefault()
        console.log(localStorage.getItem("idreseller"))
        console.log(kontakRef.current.files[0])
        const fdata = new FormData()
        if (kontakRef.current.files[0]) {
            fdata.append("reseller", localStorage.getItem("idreseller"))
            fdata.append("file", kontakRef.current.files[0])
            fdata.append("kontak", JSON.stringify(kontak))
            const upload = async() =>{
                await axios.post('http://localhost:5000/api/kontak', fdata).then(
                    response => response.status == 201 ? toast.success('Berhasil Upload Kontak') : console.log(response)
                )
            }
            upload()
        }
        
    }

    const [contacts, setContacts] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const vcardText = e.target.result;
      const parsedContacts = [];
      const vcard = VCF.parse(vcardText);
      const simpanKontak = [];
      vcard.forEach((contact) => {
        console.log(contact.get('tel')._data)
        parsedContacts.push({
          name: contact.get("fn")?._data || "Unknown",
          phone: contact.get("tel")?._data || "No Number",
          email: contact.get("email")?._data || "No Email",
        });
        simpanKontak.push({
          nama: contact.get("fn")?._data || "Unknown",
          nomor: contact.get("tel")?._data || "No Number",
        })
      });
      setKontak(simpanKontak)
      console.log(simpanKontak)
      setContacts(parsedContacts);
      sendToBackend(parsedContacts);
    };

    reader.readAsText(file);
  };

  const sendToBackend = async (contacts) => {
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacts }),
      });

      const result = await response.json();
      console.log("Saved contacts:", result);
    } catch (error) {
      console.error("Error saving contacts:", error);
    }
  };
    
    useEffect(() => {
        setNav('Tambah Data Kontak')
    },[])

    

    return (
        <div className='flex flex-col py-3 bg-white w-full items-start text-[14px] text-[#454545] min-h-full overflow-y-scroll scrollbar-hide px-[20px]'>
            <Navbar2/>
            <div className='w-full flex flex-col justify-center items-center text-center gap-[30px] mt-[70px]'>
                <img src={iKontak} alt="Kontak" className='self-center' />
                <p className='font-semibold'>Simpan Data Kontak</p>
            </div>
            <div className='flex flex-col text-center gap-[10px] md:w-full md:px-[20px]'>
            <input
                ref={kontakRef}
                onChange={handleFileUpload}
                hidden
                type="file"
                className="min-h-[335-px]" // Handle file change event
            />
                <button onClick={choseFile} className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#BDBDBD] text-white md:w-full mt-[30px]'>
                    <p>Pilih File</p>
                </button>
                <button onClick={submit} className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white md:w-full mt-[30px]'>
                    <p>Import</p>
                </button>
                <a href='/import' className='w-[335px] h-[44px] rounded-[360px] px-[30px] py-[5px] flex justify-center items-center border bg-[#EFB036] text-white md:w-full mt-[30px]'>
                    <p>Import</p>
                </a>
                <p className='text-[#BDBDBD] mb-[30px]'>file format .vcf</p>
            </div>
            <div className='w-[337px] h-[260px] flex flex-col gap-[60px] mb-[150px] md:w-full md:p-[20px]'>
                <div className='w-[337px] h-[112px] md:w-full md:px-[20px] md:text-[16px] text-[#BDBDBD]'>
                    <p className='mb-[20px] font-semibold underline'>Tutorial Backup Data Kontak Android</p>
                    <p>1. Buka aplikasi kontak di ponsel Android Anda.</p>
                    <p>2. Kemudian buka menu Settings. Ketuk opsi Import.</p>
                    <p>3. Setelah itu pilih dokumen ".vct" yang sudah disimpan.</p>
                    <p>4. Ikuti proses selanjutnya sampai data kontak bisa tersimpan dalam format ".vct".</p>
                </div>
                <div className='w-[337px] h-[128px] md:w-full md:px-[20px] md:text-[16px] text-[#BDBDBD]'>
                    <p className='my-[20px] font-semibold underline'>Tutorial Backup Data Kontak Iphone</p>
                    <p>1. Buka app kontak di Iphone Anda.</p>
                    <p>2. Ketuk daftar di kiri atas.</p>
                    <p>3. Sentuh dan tahan daftar yang ada (atau buat daftar baru dengan mengetuk Tambah Daftar).</p>
                    <p>4. Ketuk ekspor, pilih bidang yang ingin Anda sertakan, lalu ketuk selesai.</p>
                </div>
                <div>
                    <input type="file" accept=".vcf" onChange={handleFileUpload} />
                    <h3>Parsed Contacts</h3>
                    <ul>
                        {contacts.map((c, index) => (
                        <li key={index}>{c.name} - {c.phone} - {c.email}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TambahDataKontak