import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Create_place() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id_pvi: '',
        name_pvi: '',
        phone_pvi: '',
        place_pvi: '',
        mail_pvi: '',
        number_pvi: '',
        payment_pvi: '',
        date_pvi: '',
        theme_pvi: ''
    
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081//Create_Reservation_Place', values)
        .then(res => {
            console.log(res);
            navigate('/Accueil_Place')
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
                                          <input type="text" placeholder='Enter Id_pvi' className='form-control' name='id_pvi'
                                              onChange={e => setValues({...values, id_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Nom</label><br />
                                          <input type="text" placeholder='Enter votre Nom' className='form-control' name='name_pvi'
                                              onChange={e => setValues({...values, name_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Telephone</label><br />
                                          <input type="number" placeholder='Enter votre numero' className='form-control' name='phone_pvi'
                                              onChange={e => setValues({...values, phone_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Email</label><br />
                                          <input type="text" placeholder='Enter Email' className='form-control' name='mail_pvi'
                                              onChange={e => setValues({...values, mail_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Number</label><br />
                                          <input type="number" placeholder='Enter votre Numero' className='form-control' name='number_pvi'
                                              onChange={e => setValues({...values, number_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Payement</label><br />
                                          <input type="text" placeholder='Enter votre mode de payement' className='form-control' name='payment'
                                              onChange={e => setValues({...values, payment_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Date</label><br />
                                          <input type="date" placeholder='Enter Date' className='form-control' name='date_pvi'
                                              onChange={e => setValues({...values, date_pvi: e.target.value})} />
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="">Theme MasterClass</label><br />
                                          <input type="text" placeholder='Enter le theme' className='form-control' name='theme_pvi'
                                              onChange={e => setValues({...values, theme_pvi: e.target.value})} />
                                      </div>
                                    
                                      <button type='Submit' className='btn btn-success me-2'>Submit</button>
                                      <Link to="/Accueil_place" className='btn btn-primary me-2'>Back</Link>

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

export default Create_place