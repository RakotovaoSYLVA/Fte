import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Header from '../components/header';
import NavBar from '../components/NavBar';

function Edit_stand() {
    const {id_ps} = useParams();
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
    
        id_os: '',
        name_ps: '',
        phone_ps: '',
        mail_ps: '',   
        payment_ps: ''
      });

    useEffect(() => {
        axios.get(`http://localhost:8081/tsirionantsoa_fte/read_stand/${id_ps}`)
            .then(res => {
            const data = res.data[0];
                setValues({
                  
                    id_os: data.id_os,
                    name_ps: data.name_ps,
                    phone_ps: data.phone_ps,
                    mail_ps: data.mail_ps,
                    payment_ps: data.payment_ps
                    
                });
            })
            .catch(err => console.log(err));
    }, [id_ps]);

    
      const handleEdit = (event) => {
        event.preventDefault();
        const data ={
         
            id_os: values.id_os,
            name_ps: values.name_ps,
            phone_ps: values.phone_ps,
            mail_ps: values.mail_ps,
            payment_ps: values.payment_ps
        };
        axios.put(`http://localhost:8081/tsirionantsoa_fte/edit_stand/${id_ps}`, data)
        .then(res => {
            console.log('test');
            console.log(res)
            navigate('/Accueil_stand')
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
                                                <input type="text" placeholder='Enter name' className='form-control' name='name_ps' value={values.name_ps}
                                                    onChange={e => setValues({...values, name_ps: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Phone</label><br />
                                                <input type="text" placeholder='Enter phone' className='form-control' name='phone_ps' value={values.phone_ps}
                                                    onChange={e => setValues({...values, phone_ps: e.target.value})} />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="">Mail</label><br />
                                                <input type="text" placeholder='Enter mail' className='form-control' name='mail_ps' value={values.mail_ps}
                                                    onChange={e => setValues({...values, mail_ps: e.target.value})} />
                                            </div>
                                            
                                            <div className='mb-2'>
                                                <label htmlFor="">Payment</label><br />
                                                <input type="text" placeholder='Enter payment' className='form-control' name='payment_ps' value={values.payment_ps}
                                                    onChange={e => setValues({...values, payment_ps: e.target.value})} />
                                            </div>
                                                <button type='Submit' className='btn btn-success me-2'>Update</button>
                                                <Link to="/Accueil_stand" className='btn btn-primary me-2'>Back</Link>

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

export default Edit_stand;