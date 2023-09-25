import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Create_theme() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id_th: '',
    title_th: '',
    date_th: '',
    hour_th: ''
   
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Create_theme', values)
    .then(res => {
        console.log(res);
        navigate('/Accueil_theme')
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
                                          <label htmlFor="">Id</label><br />
                                          <input type="text" placeholder='Enter Id_th' className='form-control' name='id_th'
                                              onChange={e => setValues({...values, id_th: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Title</label><br />
                                          <input type="text" placeholder='Enter title' className='form-control' name='title_th'
                                              onChange={e => setValues({...values, title_th: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Date</label><br />
                                          <input type="text" placeholder='Enter date' className='form-control' name='date_th'
                                              onChange={e => setValues({...values, date_th: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Heur</label><br />
                                          <input type="text" placeholder='Enter heur' className='form-control' name='hour_th'
                                              onChange={e => setValues({...values, hour_th: e.target.value})} />
                                      </div>
                                    
                                      <button type='Submit' className='btn btn-success me-2'>Submit</button>
                                      <Link to="/Accueil_theme" className='btn btn-primary me-2'>Back</Link>

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

export default Create_theme