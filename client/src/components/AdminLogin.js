import React, { useState, useContext } from 'react';
import { useHistory , Redirect } from 'react-router-dom';
import Message from '../helpers/useMessage'

import UserContext from '../helpers/UserContext';
import '../css/AdminLogin.css'
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'easypassword'
const AdminLogin = () => {
  const history = useHistory();
  const [password, setPassword] = useState({
    password: ''
  });
  const [error, setError] = useState(false);
  const { darkMode, adminUser, setAdminUser } = useContext(UserContext);



  let color;
 
  !darkMode ? color = 'dark' : color ='light'
  if (adminUser) {
    return <Redirect to="/admin" />;
  }
  const handleChange =(e) => {
    const { name, value } = e.target;
    setPassword((l) => ({ ...l, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.password === ADMIN_PASSWORD) {
      setAdminUser(true)
      history.push('/admin')
      
    }else {
      setError(true)
    }
    
  }
  return (
    <div id='AdminLogin' className='container'>
      <div className="title">
      <h1 className={`bg-${color} text-${!darkMode ? 'light' :  'dark'}`}>Admin Login</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        id="add_user_form"
        
      >
      
        <div className="form-group">
          <label htmlFor="inputPassword">Admin Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            required
            value={password.password}
            onChange={handleChange}
          
          />
          {error ? (
          <Message  type="danger" message="NOT AUTHORIZED" />
        ) : null}
        </div>

        <button id="add_user"  className={`btn btn-${color}`}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
