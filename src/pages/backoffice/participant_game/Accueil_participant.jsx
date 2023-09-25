import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Accueil_participant() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios.get('http://localhost:8081/tsirionantsoa_fte/participant_game')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   };

   const handleDelete = (id_pg) => {
      axios.delete(`http://localhost:8081/tsirionantsoa_fte/delete_participant/${id_pg}`)
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
                                                <th>Id_pg</th>
                                                <th>Id_lg</th>
                                                <th>Name_pg</th>
                                                <th>Number_pg</th>
                                                <th>Photo_pg</th>
                                                <th>Mail_pg</th>
                                                <th>Phone_pg</th>
                                                <th>Payment_pg</th>
                                                <th>Nom_game</th>
                                                <th>Action</th>
                                             </tr>
                                       </thead>
                                       <tbody>
                                             {data.map((participant_game, index) => {
                                             return <tr key={index}>
                                                   <td>{participant_game.id_pg}</td>
                                                   <td>{participant_game.id_lg}</td>
                                                   <td>{participant_game.name_pg}</td>
                                                   <td>{participant_game.number_pg}</td>
                                                   <td>{participant_game.photo_pg}</td>
                                                   <td>{participant_game.mail_pg}</td>
                                                   <td>{participant_game.phone_pg}</td>
                                                   <td>{participant_game.payment_pg}</td>
                                                   <td>{participant_game.nom_game}</td>
                                                   <td>
                                                   <Link to={`/read_participant/${participant_game.id_pg}`} className='btn btn-sm btn-info'>Read</Link>
                                                   <Link to={`/edit_participant/${participant_game.id_pg}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                                   <button onClick={() => handleDelete(participant_game.id_pg)} className='btn btn-sm btn-danger'>Delete</button>
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

export default Accueil_participant;
