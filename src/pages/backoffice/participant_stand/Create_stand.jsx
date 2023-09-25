import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Create_stand() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id_ps: '',
    id_os: '',
    name_ps: '',
    phone_ps: '',
    mail_ps: '',   
    payment_ps: ''
   
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Create_stand', values)
    .then(res => {
        console.log(res);
        navigate('/Accueil_stand')
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
                                                <label htmlFor="">Id_ps</label><br />
                                                <input type="text" placeholder='Enter Id_ps' className='form-control' name='id_ps'
                                                    onChange={e => setValues({...values, id_ps: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Id_os</label><br />
                                                <input type="text" placeholder='Enter id_os' className='form-control' name='id_os'
                                                    onChange={e => setValues({...values, id_os: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Name</label><br />
                                                <input type="text" placeholder='Enter name' className='form-control' name='name_ps'
                                                    onChange={e => setValues({...values, name_ps: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Phone</label><br />
                                                <input type="text" placeholder='Enter phone' className='form-control' name='phone_ps'
                                                    onChange={e => setValues({...values, phone_ps: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Mail</label><br />
                                                <input type="text" placeholder='Enter mail' className='form-control' name='mail_ps'
                                                    onChange={e => setValues({...values, mail_ps: e.target.value})} />
                                            </div>
                                            
                                            <div className='mb-2'>
                                                <label htmlFor="">Payment</label><br />
                                                <input type="text" placeholder='Enter payment' className='form-control' name='payment_ps'
                                                    onChange={e => setValues({...values, payment_ps: e.target.value})} />
                                            </div>
                                            
                                            <button type='Submit' className='btn btn-success me-2'>Submit</button>
                                            <Link to="/Accueil_stand" className='btn btn-primary me-2'>Back</Link>

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

export default Create_stand