
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from '../App'
import UserContext from '../helpers/UserContext';
import '../css/Signup.css'

const Signup = () => {
  const history = useHistory();
  const [signup, setSignup] = useState({
    firstName: '',
    lastName: '',
    email: '',
    errors: [],
  });
  const { darkMode, setDarkMode } = useContext(UserContext);
  let color;
 
  !darkMode ? color = 'dark' : color ='light'
  const handleSubmit = async (e) =>{
    e.preventDefault()
    let data = {
      firstName: signup.firstName,
      lastName: signup.lastName,
      email: signup.email
    }
    try{
       await axios.post(`${BASE_URL}`,data)
      
    } catch(e){
      console.log(e);
    }
    history.push('/admin');
  }

  const handleChange =(e) => {
    const { name, value } = e.target;
    setSignup((l) => ({ ...l, [name]: value }));
  }
  return (
    <div id='Signup' className='container'>
      <div className="title">
      <h1 className={`bg-${color} text-${!darkMode ? 'light' :  'dark'}`}>Signup</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        id="add_user_form"
        
      >
        <div className="form-row">
          <div className="form-group col-md-6 ">
            <label htmlFor="inputFirstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              required
              id="inputFirstName"
              value={signup.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              required
              id="inputLastName"
              value={signup.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            required
            value={signup.email}
            onChange={handleChange}
            placeholder="john.doe@hotmail.com"
          />
        </div>

        <button id="add_user"  className={`btn btn-${color}`}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
