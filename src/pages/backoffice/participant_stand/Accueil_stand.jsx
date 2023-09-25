import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Accueil_stand() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios.get('http://localhost:8081/tsirionantsoa_fte/participant_stand')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   };

   const handleDelete = (id_ps) => {
      axios.delete(`http://localhost:8081/tsirionantsoa_fte/delete_stand/${id_ps}`)
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
                           <div className='bg-white rounded p-3'>
                              <div className='d-flex justify-content-end'>
                                    <Link to="/Create_participant" className='btn btn-success'>Create +</Link>
                                 </div>
                              <table className='table'>
                                    <thead>
                                          <tr>
                                             <th>id_ps</th>
                                             <th>id_os</th>
                                             <th>name_ps</th>
                                             <th>phone_ps</th>
                                             <th>mail_ps</th>
                                             <th>payment_ps</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {data.map((participant_stand, index) => {
                                          return <tr key={index}>
                                                <td>{participant_stand.id_ps}</td>
                                                <td>{participant_stand.id_os}</td>
                                                <td>{participant_stand.name_ps}</td>
                                                <td>{participant_stand.phone_ps}</td>
                                                <td>{participant_stand.mail_ps}</td>
                                                <td>{participant_stand.payment_ps}</td>
                                                <td>
                                                <Link to={`/read_stand/${participant_stand.id_ps}`} className='btn btn-sm btn-info'>Read</Link>
                                                <Link to={`/edit_stand/${participant_stand.id_ps}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                                <button onClick={() => handleDelete(participant_stand.id_ps)} className='btn btn-sm btn-danger'>Delete</button>
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

export default Accueil_stand;
