import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();

  const [errors, setErrors] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data === "Success") {
          navigate('/home');
        } else {
          // Alert("Vous n'êtes pas administrateur chez Nous !")
        }
        
      })
    }
  }

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    
  }

  return (
    <div className='d-flex justify-content-center align-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id="email" placeholder="Example email"
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'> {errors.email} </span>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id="password" placeholder="Entrer votre Mot de pass" 
                onChange={handleInput} className='form-control rounded-0' />
                {errors.password && <span className='text-danger'> {errors.password} </span>}
              </div>
                <button type="submit" className="btn btn-success w-100 rounded-0" data-toggle="modal" data-tar get="#exampleModal">Login</button>
                <p>Veillez remplir le formulaire</p>
                  <Link to="/signup" type="button" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" data-toggle="modal" data-target="#exampleModal">
                        Create Account
                  </Link>
            </form>
            
        </div>
    </div>
  )
}

export default Login