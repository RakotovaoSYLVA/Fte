import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Accueil_back() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios.get('http://localhost:8081/tsirionantsoa_fte/liste_game')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   };

   const handleDelete = (id_lg) => {
      axios.delete(`http://localhost:8081/tsirionantsoa_fte/delete/${id_lg}`)
         .then(() => {
            fetchData(); 
         })
         .catch(err => console.log(err));
   };

   return (
      
      <div>
         <body className="sb-nav-fixed">
           
               <div>
               <Header />
               </div>
            <div id="layoutSidenav">
               <div>
                  <NavBar />
               </div>
                  <div id="layoutSidenav_content">
                     <main>
                           <div className="container-fluid px-4">
                              <h1 className="mt-4">Gestion de FTE</h1>
                              <ol className="breadcrumb mb-4">
                                 <li className="breadcrumb-item active">Home</li>
                              </ol>
                              <div className='bg-image'>

                              <div className=' bg-glassmorphism rounded p-5 st1'>
                              <div className='creer'>
                                       <Link to="/create" className='btn btn-success'> + </Link>
                              </div>            
                                    <table className='table table_dark'>
                                          <thead>
                                             <tr>
                                                <th>Id_lg</th>
                                                <th>Name_lg</th>
                                                <th>Tarif_lg</th>
                                                <th>Photo_lg</th>
                                                <th>Actions</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             {data.map((liste_game, index) => {
                                                return <tr key={index}>
                                                   <td>{liste_game.id_lg}</td>
                                                   <td>{liste_game.name_lg}</td>
                                                   <td>{liste_game.tarif_lg}</td>
                                                   <td>{liste_game.photo_lg}</td>
                                                   <td>
                                                      <Link to={`/read/${liste_game.id_lg}`} className='btn btn-sm btn-info'>Read</Link>
                                                      <Link to={`/edit/${liste_game.id_lg}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                                      <button onClick={() => handleDelete(liste_game.id_lg)} className='btn btn-sm btn-danger'>Delete</button>
                                                   </td>
                                                </tr>
                                             })}
                                          </tbody>
                                    </table>               
                              </div>
                              </div>
                           </div>
                        </main>
                  </div>
               
            </div>
            
         </body>
      </div>
   )
}

export default Accueil_back;
