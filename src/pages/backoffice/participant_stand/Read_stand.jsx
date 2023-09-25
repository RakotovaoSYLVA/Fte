import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Read_stand() {
  const { id_ps } = useParams();
  const [participant_stand, setParticipant_game] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8081/tsirionantsoa_fte/read_stand/${id_ps}`)
      .then(res => {
        console.log(res);
        setParticipant_game(res.data[0]); // Assuming you expect a single object, not an array
      })
      .catch(err => {
        console.error(err);
        setError("Une erreur s'est produite lors de la récupération des données.");
      });
  }, [id_ps]);

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
                            {error && <div className="alert alert-danger">{error}</div>}
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
                                <tr>
                                <td>{participant_stand.id_ps}</td>
                                <td>{participant_stand.id_os}</td>
                                <td>{participant_stand.name_ps}</td>
                                <td>{participant_stand.phone_ps}</td>
                                <td>{participant_stand.mail_ps}</td>
                                <td>{participant_stand.payment_ps}</td>
                                </tr>
                              </tbody>
                            </table>
                            <Link to={`/Edit_stand/${participant_stand.id_ps}`} className='btn btn-info'>Edit</Link>
                            <Link to="/Accueil_stand" className='btn btn-primary me-2'>Back</Link>
                          </div>
                        </div>
                        </main>
                  </div>
            </div>
          </body>
      </div>
  );
}

export default Read_stand;
