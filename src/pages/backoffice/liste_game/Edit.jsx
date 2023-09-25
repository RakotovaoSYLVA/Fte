import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Edit() {
    const {id_lg} = useParams();
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        name_lg: '',
        tarif_lg: '',
        photo_lg: ''
      });

    useEffect(() => {
        axios.get(`http://localhost:8081/tsirionantsoa_fte/listeGame_read/${id_lg}`)
            .then(res => {
            const data = res.data[0];
                setValues({
                    name_lg: data.name_lg,
                    tarif_lg: data.tarif_lg,
                    photo_lg: data.photo_lg
                });
            })
            .catch(err => console.log(err));
    }, [id_lg]);

    
      const handleEdit = (event) => {
        event.preventDefault();
        const data ={
            name_lg: values.name_lg,
            tarif_lg: values.tarif_lg,
            photo_lg: values.photo_lg
        };
        axios.put(`http://localhost:8081/tsirionantsoa_fte/listeGame_edit/${id_lg}`, data)
        .then(res => {
            console.log('test');
            console.log(res)
            navigate('/Accueil_back')
        })
        .catch(err => console.log(err))
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
                <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Gestion de FTE</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">Home</li>
                                </ol>
                                    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                                        <div className='w-50 bg-white rounded p-3'>
                                            <form onSubmit={handleEdit}>
                                                <h2>EDIT</h2>

                                                    <div className='mb-2'>
                                                        <label htmlFor="">Name</label><br />
                                                        <input type="text" placeholder='Enter name' className='form-control' name='name_lg' value={values.name_lg}
                                                            onChange={e => setValues({...values, name_lg: e.target.value})} />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="">Tarif</label><br />
                                                        <input type="text" placeholder='Enter tarif' className='form-control' name='tarif_lg' value={values.tarif_lg}
                                                            onChange={e => setValues({...values, tarif_lg: e.target.value})} />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="">Photo</label><br />
                                                        <input type="text" placeholder='Enter photo' className='form-control' name='photo_lg' value={values.photo_lg}
                                                            onChange={e => setValues({...values, photo_lg: e.target.value})} />
                                                    </div>
                                                    <button type='Submit' className='btn btn-success me-2'>Update</button>
                                                    <Link to="/Accueil_back" className='btn btn-primary me-2'>Back</Link>

                                            </form>
                                        
                                        </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </body>
    </div>
  );
}

export default Edit;