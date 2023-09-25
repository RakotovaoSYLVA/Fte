import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Accueil_offre() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios.get('http://localhost:8081/tsirionantsoa_fte/offre_stand')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   };

   const handleDelete = (id_os) => {
      const shouldDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet objet ?");

      if (shouldDelete) {
         axios.delete(`http://localhost:8081/tsirionantsoa_fte/delete_offre/${id_os}`)
            .then(() => {
               fetchData(); // Mettre à jour les données après la suppression
            })
            .catch(err => console.log(err));
      }
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
                                       <Link to="/Create_offre" className='btn btn-success'>Create +</Link>
                                    </div>
                                 <table className='table'>
                                       <thead>
                                             <tr>
                                                <th>Id</th>
                                                <th>Name_os</th>
                                                <th>Type_stand</th>
                                                <th>Tarifos</th>
                                                
                                             </tr>
                                       </thead>
                                       <tbody>
                                             {data.map((offre_stand, index) => {
                                             return <tr key={index}>
                                                   <td>{offre_stand.id_os}</td>
                                                   <td>{offre_stand.name_os}</td>
                                                   <td>{offre_stand.type_stand}</td>
                                                   <td>{offre_stand.tarif_os}</td>
                                                
                                                   <td>
                                                   <Link to={`/read_offre/${offre_stand.id_os}`} className='btn btn-sm btn-info'>Read</Link>
                                                   <Link to={`/edit_offre/${offre_stand.id_os}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                                   <button onClick={() => handleDelete(offre_stand.id_os)} className='btn btn-sm btn-danger'>Delete</button>
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

export default Accueil_offre;
