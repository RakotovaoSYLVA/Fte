import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Read_offre() {
    const {id_os} = useParams();
    const[offre_stand, setOffre_stand] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/tsirionantsoa_fte/read_offre/${id_os}`)
            .then(res => {
                console.log(res)
                setOffre_stand(res.data);
            })
            .catch(err => console.log(err))
    }, [id_os]);

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
                                                <th>Id_os</th>
                                                <th>Name_os</th>
                                                <th>Type_stand</th>
                                                <th>Tarif_os</th>                      
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {offre_stand.map((offre_stand, index) => {
                                        return   <tr key={index}>
                                                    <td>{offre_stand.id_os}</td>
                                                    <td>{offre_stand.name_os}</td>
                                                    <td>{offre_stand.type_stand}</td>
                                                    <td>{offre_stand.tarif_os}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                
                                    <Link to="/Accueil_offre" className='btn btn-primary me-2'>Back</Link>
                                </div>
                            </div>
                        </main>
                    </div>
            </div>
            </body>
        </div>
    )
}

export default Read_offre
