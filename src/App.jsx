import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import './App.css';
import Aktivasi from '../Pages/Aktivasi';
import UploadBukti from '../Pages/UploadBukti';
import SaldoKomisi from '../Pages/SaldoKomisi';
import SaldoVoucher from '../Pages/SaldoVoucher';
import DetailProduk from '../Pages/DetailProduk';
import TambahDataKontak from '../Pages/TambahDataKontak';
import Import from '../Pages/Import';
import ProdukSupplier from '../Pages/ProdukReseller';
import DaftarPesanan from '../Pages/DaftarPesanan';
import Pembayaran from '../Pages/Pembayaran';
import Login from '../Pages/Login';
import Registrasi from '../Pages/Registrasi';
import LupaAkun from '../Pages/LupaAkun';
import AktivasiAventa from '../Pages/AktivasiAventa';
import UploadBuktiAventa from '../Pages/UploadBuktiAventa';
import Profil from '../Pages/Profil';
import Riwayat from '../Pages/Riwayat';
import Mitra from '../Pages/Mitra';
import KlaimVoucher from '../Pages/KlaimVoucher';
import DetailVoucher from '../Pages/DetailVoucher';
import DaftarPesananVoucher from '../Pages/DaftarPesananVoucher';
import DetailKategori from '../Pages/DetailKategori';
import DetailProdukKategori from '../Pages/DetailProdukKategori';
import { createContext, useState } from 'react';
import EditData from '../Pages/EditData';
import DetailPesanan from '../Pages/DetailPesanan';
import PIN from '../Pages/PIN';
import ProdukReseller from '../Pages/ProdukReseller';
import SocialLinks from '../Pages/SocialLinks';

export const contextall = createContext()
function App() {
  const [nav, setNav] = useState('TES')
  return (
    <contextall.Provider value={{nav, setNav}}>
    <Router>
      <div id='root2'>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrasi/:id" element={<Registrasi />} />
          <Route path="/LupaAkun" element={<LupaAkun />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Riwayat" element={<Riwayat />} />
          <Route path="/Mitra" element={<Mitra />} />
          <Route path="/Aktivasi" element={<Aktivasi />} />
          <Route path="/AktivasiAventa" element={<AktivasiAventa />} />
          <Route path="/UploadBukti" element={<UploadBukti />} />
          <Route path="/UploadBuktiAventa" element={<UploadBuktiAventa />} />
          <Route path="/SaldoKomisi" element={<SaldoKomisi />} />
          <Route path="/SaldoVoucher" element={<SaldoVoucher />} />
          <Route path="/DetailProduk/:id" element={<DetailProduk />} />
          <Route path="/TambahDataKontak" element={<TambahDataKontak />} />
          <Route path="/Import" element={<Import />} />
          <Route path="/ProdukReseller" element={<ProdukReseller />} />
          <Route path="/DaftarPesanan" element={<DaftarPesanan />} />
          <Route path="/Pembayaran" element={<Pembayaran />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/KlaimVoucher" element={<KlaimVoucher />} />
          <Route path="/DetailVoucher" element={<DetailVoucher />} />
          <Route path="/DaftarPesananVoucher" element={<DaftarPesananVoucher />} />
          <Route path="/DetailKategori" element={<DetailKategori />} />
          <Route path="/DetailProdukKategori/:id" element={<DetailProdukKategori />} />
          <Route path="/EditData" element={<EditData />} />
          <Route path="/DetailPesanan" element={<DetailPesanan />} />
          <Route path="/PIN" element={<PIN />} />
          <Route path="/SocialLinks" element={<SocialLinks />} />
        </Routes>
      </div>
    </Router>
    </contextall.Provider>
  );
}

export default App;