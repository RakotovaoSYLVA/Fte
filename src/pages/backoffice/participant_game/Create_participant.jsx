import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Create_participant() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id_lg: '',
    name_pg: '',
    number_pg: '',
    photo_pg: '',
    mail_pg: '',
    phone_pg: '',
    payment_pg: '',
    nom_game: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Create_participant', values)
    .then(res => {
        console.log(res);
        navigate('/Accueil_participant')
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
                                            <label htmlFor="">Id_lg</label><br />
                                            <input type="text" placeholder='Enter Id_lg' className='form-control' name='id_lg'
                                                onChange={e => setValues({...values, id_lg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Name Participant</label><br />
                                            <input type="text" placeholder='Enter name' className='form-control' name='name_lg'
                                                onChange={e => setValues({...values, name_pg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Number</label><br />
                                            <input type="text" placeholder='Enter number' className='form-control' name='number_pg'
                                                onChange={e => setValues({...values, number_pg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Photo</label><br />
                                            <input type="text" placeholder='Enter photo' className='form-control' name='photo_pg'
                                                onChange={e => setValues({...values, photo_pg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Mail</label><br />
                                            <input type="text" placeholder='Enter mail' className='form-control' name='mail_pg'
                                                onChange={e => setValues({...values, mail_pg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Phone</label><br />
                                            <input type="text" placeholder='Enter phone' className='form-control' name='phone_pg'
                                                onChange={e => setValues({...values, phone_pg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Payment</label><br />
                                            <input type="text" placeholder='Enter payment' className='form-control' name='payment_pg'
                                                onChange={e => setValues({...values, payment_pg: e.target.value})} />
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="">NameGame</label><br />
                                            <input type="text" placeholder='Enter nom_game' className='form-control' name='nom_game'
                                                onChange={e => setValues({...values, nom_game: e.target.value})} />
                                        </div>
                                        <button type='Submit' className='btn btn-success me-2'>Submit</button>
                                        <Link to="/Accueil_participant" className='btn btn-primary me-2'>Back</Link>

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

export default Create_participant