import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';

import BerandaWM from './warung_makan/beranda';
import PesanWM from './warung_makan/pesan';
import KontakKamiWM from './warung_makan/kontak_kami';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter >
    <Routes>
      <Route path='/' Component={App} />

      <Route path='warung-makan/beranda' Component={BerandaWM} />
      <Route path='warung-makan/pesan' Component={PesanWM} />
      <Route path='warung-makan/kontak-kami' Component={KontakKamiWM} />

    </Routes>
  </HashRouter>
);

