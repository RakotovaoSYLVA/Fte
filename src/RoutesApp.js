import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/home/login/Login";
import Signup from './pages/home/signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

//import liste_game
import Accueil_back from './pages/backoffice/liste_game/Accueil_back';
import Create from './pages/backoffice/liste_game/Create';
import Read from './pages/backoffice/liste_game/Read';
import Edit from './pages/backoffice/liste_game/Edit';
//import participant_game
import Accueil_participant from './pages/backoffice/participant_game/Accueil_participant';
import Create_participant from './pages/backoffice/participant_game/Create_participant';
import Read_participant from './pages/backoffice/participant_game/Read_participant';
import Edit_participant from './pages/backoffice/participant_game/Edit_participant';
import Accueil_stand from './pages/backoffice/participant_stand/Accueil_stand';
import Create_stand from './pages/backoffice/participant_stand/Create_stand';
import Edit_stand from './pages/backoffice/participant_stand/Edit_stand';
import Read_stand from './pages/backoffice/participant_stand/Read_stand';
import Accueil_theme from './pages/backoffice/theme/Accueil_theme';
import Create_theme from './pages/backoffice/theme/Create_theme';
import Accueil_offre from './pages/backoffice/offre_stand/Accueil_offre';
import Create_offre from './pages/backoffice/offre_stand/Create_offre';
import Read_offre from './pages/backoffice/offre_stand/Read_offre';
import Edit_offre from './pages/backoffice/offre_stand/Edit_offre';

import Dashboard from './pages/backoffice/Dashboard';

import Contact from './pages/home/contact/Contact';

import AdminPanel from './pages/backoffice/adminpanel/AdminPanel';

import {ParticipantGame} from './pages/backoffice/participant_game/index'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/Accueil_back" element={<Accueil_back />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/read/:id_lg" element={<Read />} />
      <Route path="/edit/:id_lg" element={<Edit />} />

      <Route path="/Accueil_participant" element={<Accueil_participant />} />
      <Route path="/Create_participant" element={<Create_participant />} />
      <Route path="/Read_participant/:id_pg" element={<Read_participant />} />
      <Route path="/Edit_participant/:id_pg" element={<Edit_participant />} />
      <Route path="/participant_Game" element={<ParticipantGame/>}/>

      <Route path="/Accueil_stand" element={<Accueil_stand />} />
      <Route path="/Create_stand" element={<Create_stand />} />
      <Route path="/Read_stand/:id_ps" element={<Read_stand />} />
      <Route path="/Edit_stand/:id_ps" element={<Edit_stand />} />

      <Route path="/Accueil_theme" element={<Accueil_theme />} />
      <Route path="/Create_theme" element={<Create_theme />} />

      <Route path="/Accueil_offre" element={<Accueil_offre />} />
      <Route path="/Create_offre" element={<Create_offre />} />
      <Route path="/Read_offre/:id_os" element={<Read_offre />} />
      <Route path="/Edit_offre/:id_os" element={<Edit_offre />} />

      <Route path='/dashboard' element={<Dashboard />} />

      <Route path="/contact" element={< Contact />} />

      <Route path="/adminPanel" element={<AdminPanel/>} />

    </Routes>
  );
};

export default RoutesApp;

