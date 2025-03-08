import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function Apptes() {
  const [count, setCount] = useState(0)

  const bc =async (e) => {
    e.preventDefault()
    console.log('abc')
    const url = '/api3';
    const pesan = 'HAI INI SAYA'
    const banyak = [1, 2, 3, 4, 5]
    const headers = {
      'mo-userid': 'C2963',
      'mo-secret': '7f396b6e14e2ed69a19fa266d2a078d03c3760e5ba68011701ad90f8a21f645b',
  };
    
    
    
    // await axios.post(url, fdata, {
    //    headers
    //   }).then(Response => console.log(Response.data))
    
      banyak.map((item, i) => {
    const fdata = new FormData()
    fdata.append("inquiry", 'SEND.MSG')
    fdata.append("account", '6283869753626')
    fdata.append("contact", '6288232943147')
    fdata.append("content", 'HAI INI SAYA'+item)
    fdata.append("content_type", 0)
    fdata.append("prior", 10)
    const post = async() =>{
      await axios.post(url, fdata, {
        headers
       }).then(Response => console.log(Response.data))
    }
    post()
      } 
    )
  }

const bc2 = async (e) => {
    e.preventDefault();
    console.log('Sending request...');

    const url = '/api';  // Vite proxy will rewrite this to `https://mesinotomatis.com/api/wa/`

    const headers = {
        'mo-userid': 'C2963',
        'mo-secret': '7f396b6e14e2ed69a19fa266d2a078d03c3760e5ba68011701ad90f8a21f645b',
    };

    const fdata = new FormData();
    fdata.append("inquiry", "SEND.MSG");
    fdata.append("account", "6283869753626");  // Ensure this matches Postman
    fdata.append("contact", "6285712205373");
    fdata.append("content", "HAI INI SAYA");
    fdata.append("content_type", 0);
    fdata.append("prior", 10);

    try {
        const response = await axios.post(url, fdata, { headers });
        console.log('Success:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

const bc3 = async (e) => {
  e.preventDefault();
  console.log('Sending request...');

  const url = '/api2';  // Vite proxy will rewrite this to `https://mesinotomatis.com/api/wa/`

  const headers = {
      'mo-userid': 'C2963',
      'mo-secret': '7f396b6e14e2ed69a19fa266d2a078d03c3760e5ba68011701ad90f8a21f645b'
  };

  const fdata = new FormData();
  fdata.append("inquiry", "CHECK.BALANCE");
  fdata.append("bank", "BCA");
  fdata.append("account", "0771201643");

  try {
      const response = await axios.post(url, fdata, { headers });
      console.log('Success:', response.data);
  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
  }
};
const bc4 = async (e) => {
  e.preventDefault();
  console.log('Sending request...');

  const url = '/api2';  // Vite proxy will rewrite this to `https://mesinotomatis.com/api/wa/`

  const headers = {
      'mo-userid': 'C2963',
      'mo-secret': '7f396b6e14e2ed69a19fa266d2a078d03c3760e5ba68011701ad90f8a21f645b'
  };

  const fdata = new FormData();
  fdata.append("inquiry", "CHECK.MUTATION");
  fdata.append("bank", "BCA");
  fdata.append("account", "0771201643");
  fdata.append("reference", "amount"); // value diijinkan: date, amount, description
  fdata.append("key", "7380000");
  const fdata2 = new FormData();
  fdata2.append("inquiry", "CHECK.MUTATION");
  fdata2.append("bank", "BCA");
  fdata2.append("account", "0771201643");
  fdata2.append("reference", "date"); // value diijinkan: date, amount, description
  fdata2.append("key", "2025-02-28");

  try {
      const response = await axios.post(url, fdata, { headers });
      const response2 = await axios.post(url, fdata2, { headers });
      console.log('Success:', response.data);
      console.log('Success2:', response2.data);
  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
  }
};
  return (
    <>
      <div className='border- w-full h-full flex flex-col items-center justify-center'>
        <h1>TES WHaTSAPP</h1>
        <button onClick={bc} className='bg-slate-600/70'>PESAN</button>
        <h1>TES BANK</h1>
        <button onClick={bc3} className='bg-slate-600/70'>BANK</button>
        <button onClick={bc4} className='bg-slate-600/70'>BANK2</button>
      </div>
    </>
  )
}

export default Apptes
