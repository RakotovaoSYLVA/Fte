import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.name === '' && errors.email === '' && errors.password === '') {
      try {
        const response = await axios.post('http://localhost:8081/register', values);
        console.log('Response:', response.data);
        navigate('/login');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='d-flex justify-content-center align-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Example name'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'> {errors.name} </span>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Example email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'> {errors.email} </span>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'> {errors.password} </span>}
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
             <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm your password'
                  onChange={handleInput}
                  className='form-control rounded-0'
             />
              {errors.confirmPassword && <span className='text-danger'> {errors.confirmPassword} </span>}
          </div>

          <p>Please fill out the form</p>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Sign up
          </button>
          </form>
          <Link
            to='/login'
            type='button'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          >
            Login
          </Link>
        
      </div>
    </div>
  );
}

export default Signup;