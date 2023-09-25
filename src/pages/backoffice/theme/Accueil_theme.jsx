import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Accueil_theme() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios.get('http://localhost:8081/tsirionantsoa_fte/theme')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   };

   const handleDelete = (id_th) => {
      axios.delete(`http://localhost:8081/tsirionantsoa_fte/delete_theme/${id_th}`)
         .then(() => {
            fetchData(); // Mettre à jour les données après la suppression
         })
         .catch(err => console.log(err));
   };

   return (
      <div className='container'>
        <body class="sb-nav-fixed">
            <div>
                <Header />
            </div>
            <div id="layoutSidenav">
                <div>
                    <NavBar />
                </div>
                  <div id="layoutSidenav_content">
                        <main>
                           <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                           <div className='w-50 bg-white rounded p-3'>
                              <div className='d-flex justify-content-end'>
                                    <Link to="/Create_theme" className='btn btn-success'>+</Link>
                                 </div>
                              <table className='table'>
                                    <thead>
                                          <tr>
                                             <th>id_th</th>
                                             <th>title_th</th>
                                             <th>date_th</th>
                                             <th>hour_th</th>
                                             
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {data.map((participant_theme, index) => {
                                          return <tr key={index}>
                                                <td>{participant_theme.id_th}</td>
                                                <td>{participant_theme.title_th}</td>
                                                <td>{participant_theme.date_th}</td>
                                                <td>{participant_theme.hour_th}</td>
                                    
                                                <td>
                                                <button onClick={() => handleDelete(participant_theme.id_th)} className='btn btn-sm btn-danger'>Delete</button>
                                             </td>
                                             </tr>
                                          })}
                                    </tbody>
                                 </table>
                           </div>
                        </div>
                        </main>
                  </div>
            </div>
         </body>
      </div>
                     
   )
}

export default Accueil_theme;
