  import axios from 'axios';
  import React, { useState } from 'react'
  import { useNavigate, Link } from 'react-router-dom';
  import Header from '../components/header';
  import NavBar from '../components/NavBar';

  function Create() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
      name_lg: '',
      tarif_lg: '',
      photo_lg: ''
    })
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8081/liste_game', values)
      .then(res => {
          console.log(res);
          navigate('/Accueil_back')
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
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Gestion de FTE</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">Home</li>
                                </ol>
                                <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                                      <div className='w-50 bg-white rounded p-6'>
                                          <form onSubmit={handleSubmit}>
                                              <h2>ADD</h2>

                                                  <div className='mb-2'>
                                                      <label htmlFor="">Name</label><br />
                                                      <input type="text" placeholder='Enter name' className='form-control' name='name_lg'
                                                          onChange={e => setValues({...values, name_lg: e.target.value})} />
                                                  </div>
                                                  <div className='mb-2'>
                                                      <label htmlFor="">Tarif</label><br />
                                                      <input type="text" placeholder='Enter tarif' className='form-control' name='tarif_lg'
                                                          onChange={e => setValues({...values, tarif_lg: e.target.value})} />
                                                  </div>
                                                  <div className='mb-2'>
                                                      <label htmlFor="">Photo</label><br />
                                                      <input type="text" placeholder='Enter photo' className='form-control' name='photo_lg'
                                                          onChange={e => setValues({...values, photo_lg: e.target.value})} />
                                                  </div>
                                                  <button type='Submit' className='btn btn-success me-2'>Submit</button>
                                                  <Link to="/Accueil_back" className='btn btn-primary me-2'>Back</Link>

                                          </form>
                                        
                                      </div>
                                </div>
                              </div>
                            </main>
                    </div>
                  
              </div>
        </body>
      </div>
    )
  }

  export default Create