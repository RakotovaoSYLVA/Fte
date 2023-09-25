import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Create_offre() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id_os: '',
    name_os: '',
    type_stand: '',
    tarif_os: ''
     
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Create_offre', values)
    .then(res => {
        console.log(res);
        navigate('/Accueil_offre')
    })
    .catch(err => console.log(err))
  }
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
                                    <form onSubmit={handleSubmit}>
                                        <h2>ADD</h2>

                                            <div className='mb-2'>
                                                <label htmlFor="">Id_os</label><br />
                                                <input type="text" placeholder='Enter Id_os' className='form-control' name='id_os'
                                                    onChange={e => setValues({...values, id_os: e.target.value})} />
                                            </div>
                                          
                                            <div className='mb-2'>
                                                <label htmlFor="">Name</label><br />
                                                <input type="text" placeholder='Enter name' className='form-control' name='name_os'
                                                    onChange={e => setValues({...values, name_os: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Type_stand</label><br />
                                                <input type="text" placeholder='Enter type-stand' className='form-control' name='type_stand'
                                                    onChange={e => setValues({...values, type_stand: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Tarif_os</label><br />
                                                <input type="text" placeholder='Enter tarif' className='form-control' name='tarif_os'
                                                    onChange={e => setValues({...values, tarif_os: e.target.value})} />
                                            </div>
                                          
                                            <button type='Submit' className='btn btn-success me-2'>Submit</button>
                                            <Link to="/Accueil_offre" className='btn btn-primary me-2'>Back</Link>

                                    </form>
                                  
                                </div>
                          </div>
                        </main>
                  </div>
            </div>
          </body>
    </div>
          
  )
}

export default Create_offre