import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Header from '../components/header';
import NavBar from '../components/NavBar';


function Edit_offre() {
    const {id_os} = useParams();
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        id_os: '',
        name_os: '',
        type_stand: '',
        tarif_os: ''
      });

    useEffect(() => {
        axios.get(`http://localhost:8081/tsirionantsoa_fte/read_offre/${id_os}`)
            .then(res => {
            const data = res.data[0];
                setValues({
                    id_os: data.id_os,
                    name_os: data.name_os,
                    type_stand: data.type_stand,
                    tarif_os: data.tarif_os
                });
            })
            .catch(err => console.log(err));
    }, [id_os]);

    
      const handleEdit = (event) => {
        event.preventDefault();
        const data ={
            id_os: values.id_os,
            name_os: values.name_os,
            type_stand: values.type_stand,
            tarif_os: values.tarif_os
        };
        axios.put(`http://localhost:8081/tsirionantsoa_fte/edit_offre/${id_os}`, data)
        .then(res => {
            console.log('test');
            console.log(res)
            navigate('/Accueil_offre')
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
                </div>
                  <div id="layoutSidenav_content">
                        <main>
                            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                                <div className='w-50 bg-white rounded p-3'>
                                    <form onSubmit={handleEdit}>
                                        <h2>EDIT</h2>
                                        <div className='mb-2'>
                                                <label htmlFor="">Id_os</label><br />
                                                <input type="text" placeholder='Enter id_os' className='form-control' name='id_os' value={values.id_os}
                                                    onChange={e => setValues({...values, id_os: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Name</label><br />
                                                <input type="text" placeholder='Enter name' className='form-control' name='name_os' value={values.name_os}
                                                    onChange={e => setValues({...values, name_os: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Tyte_stand</label><br />
                                                <input type="text" placeholder='Enter type' className='form-control' name='type_stand' value={values.type_stand}
                                                    onChange={e => setValues({...values, type_stand: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Tarif_os</label><br />
                                                <input type="text" placeholder='Enter tarif' className='form-control' name='tarif_os' value={values.tarif_os}
                                                    onChange={e => setValues({...values, tarif_os: e.target.value})} />
                                            </div>
                                            <button type='Submit' className='btn btn-success me-2'>Update</button>
                                            <Link to="/Accueil_offre" className='btn btn-primary me-2'>Back</Link>

                                    </form>
                                
                                </div>
                        </div>
                        </main>
                    </div>
            </div>
            </body>
    </div>
  );
}

export default Edit_offre;