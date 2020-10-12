import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../helpers/UserContext';
import Message from '../helpers/useMessage'
import'../css/Home.css'

const Home = () => {
  const { darkMode, adminUser } = useContext(UserContext);
  let color
  !darkMode ? color = 'dark' : color ='light'
  return (
    <div id='Home'>
      <h1>Yodlr Design Challenge</h1>
      <h3>Created by David Salazar</h3>
      
     <div className="container">
     
      <div className="row mb-3">
        <div className="col-md-6">
        
        <i className={`fas fa-user-shield fa-10x text-${color}`}></i>
        <Link className={`btn btn-${color} mt-3`} to='/admin-login'>Admin Page</Link>
        
    
        </div>
        <div className="col-md-6">
     
      <i className={`fas fa-user-plus fa-10x text-${color}`}></i>
      <Link className={`btn btn-${color} mt-3`} to='/signup'>Signup Page</Link>
      
        </div>
        
      </div>
     
     </div>
    </div>
  )
}

export default Home
