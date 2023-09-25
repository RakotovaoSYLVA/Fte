import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Read_participant() {
  const { id_pg } = useParams();
  const [participant_game, setParticipant_game] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8081/tsirionantsoa_fte/read_participant/${id_pg}`)
      .then(res => {
        console.log(res);
        setParticipant_game(res.data[0]); // Assuming you expect a single object, not an array
      })
      .catch(err => {
        console.error(err);
        setError("Une erreur s'est produite lors de la récupération des données.");
      });
  }, [id_pg]);

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
                                    <th>Id_pg</th>
                                    <th>Id_lg</th>
                                    <th>Name_pg</th>
                                    <th>Number_pg</th>
                                    <th>Photo_pg</th>
                                    <th>Mail_pg</th>
                                    <th>Phone_pg</th>
                                    <th>Payment_pg</th>
                                    <th>Nom_game</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{participant_game.id_pg}</td>
                                    <td>{participant_game.id_lg}</td>
                                    <td>{participant_game.name_pg}</td>
                                    <td>{participant_game.number_pg}</td>
                                    <td>{participant_game.photo_pg}</td>
                                    <td>{participant_game.mail_pg}</td>
                                    <td>{participant_game.phone_pg}</td>
                                    <td>{participant_game.payment_pg}</td>
                                    <td>{participant_game.nom_game}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <Link to={`/Edit_participant/${participant_game.id_pg}`} className='btn btn-info'>Edit</Link>
                              <Link to="/Accueil_participant" className='btn btn-primary me-2'>Back</Link>
                            </div>
                          </div>
                        </main>
                  </div>
            </div>
        </body>
      </div>
                
  );
}

export default Read_participant;
