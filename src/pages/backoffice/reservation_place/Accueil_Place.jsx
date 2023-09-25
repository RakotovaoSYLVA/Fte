import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Accueil_Place() {

  const [data, setData] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios.get('http://localhost:8081/Reservation_place')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
   };

   const handleDelete = (id_pvi) => {
      axios.delete(`http://localhost:8081//delete_Rservation_Place/${id_pvi}`)
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
                                    <Link to="/Create_place" className='btn btn-success'>+</Link>
                                 </div>
                              <table className='table'>
                                    <thead>
                                          <tr>
                                             <th>Nom</th>
                                             <th>Phone</th>
                                             <th>Place</th>
                                             <th>Email</th>
                                             <th>Numero</th>
                                             <th>Payement</th>
                                             <th>Date</th>
                                             <th>Theme</th>
                                             
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {data.map((reservation_place, index) => {
                                          return <tr key={index}>
                                                <td>{reservation_place.name_pvi}</td>
                                                <td>{reservation_place.phone_pvi}</td>
                                                <td>{reservation_place.place_pvi}</td>
                                                <td>{reservation_place.mail_pvi}</td>
                                                <td>{reservation_place.number_pvi}</td>
                                                <td>{reservation_place.payment_pvi}</td>
                                                <td>{reservation_place.date_pvi}</td>
                                                <td>{reservation_place.theme_pvi}</td>
                                    
                                                <td>
                                                <button onClick={() => handleDelete(reservation_place.id_pvi)} className='btn btn-sm btn-danger'>Delete</button>
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

export default Accueil_Place