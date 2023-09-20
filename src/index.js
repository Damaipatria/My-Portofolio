import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';

import BerandaWM from './warung_makan/beranda';
import PesanWM from './warung_makan/pesan';
import KontakKamiWM from './warung_makan/kontak_kami';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App title='DamaiPs' />} />

      <Route path='warung-makan/beranda' element={<BerandaWM title='Warung MS | Beranda' />} />
      <Route path='warung-makan/pesan' element={<PesanWM title='Warung MS | Pesan' />} />
      <Route path='warung-makan/kontak-kami' element={<KontakKamiWM title='Warung MS | Kontak Kami' />} />

    </Routes>
  </BrowserRouter>
);

