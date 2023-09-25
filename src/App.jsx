import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from './RoutesApp';
import Accueil_back from './pages/backoffice/liste_game/Accueil_back';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<AppRoute />} />
        <Route path="/Accueil_back" element={<Accueil_back />} />
      </Routes>
    </Router>
  );
}

export default App;




