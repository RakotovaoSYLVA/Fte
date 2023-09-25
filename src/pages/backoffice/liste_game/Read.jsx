import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Read() {
    const {id_lg} = useParams();
    const[liste_game, setListe_game] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/tsirionantsoa_fte/listeGame_read/${id_lg}`)
            .then(res => {
                console.log(res)
                setListe_game(res.data);
            })
            .catch(err => console.log(err))
    }, [id_lg]);

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
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Id_lg</th>
                                                <th>Name_lg</th>
                                                <th>Tarif_lg</th>
                                                <th>Photo_lg</th>                      
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {liste_game.map((liste_game, index) => {
                                        return   <tr key={index}>
                                                    <td>{liste_game.id_lg}</td>
                                                    <td>{liste_game.name_lg}</td>
                                                    <td>{liste_game.tarif_lg}</td>
                                                    <td>{liste_game.photo_lg}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                    <Link to={`/edit/${liste_game.id_lg}`} className='btn btn-info'>Edit</Link>
                                    <Link to="/Accueil_back" className='btn btn-primary me-2'>Back</Link>
                                </div>
                            </div>
                        </main>
                </div>
            </div>
            </body>
        </div>
    )
}

export default Read
