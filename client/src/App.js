import React, {useState} from 'react';
// import { decode } from 'jsonwebtoken';
// import useLocalStorage from './helpers/useLocalStorage'
import UserContext from './helpers/UserContext'
import Routes from './routes/Routes'
import Navbar from './components/Navbar'
import './App.css';
export const TOKEN_STORAGE_ID = 'yodlr-token';
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000/users';
const App =() => {
  const [adminUser, setAdminUser] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  let color;
 
  !darkMode ? color = 'light' : color ='dark'

  // const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  return (
    <UserContext.Provider value={{ darkMode, setDarkMode, adminUser, setAdminUser }}>
    <div className={`App ${color}`}>
      <Navbar/>
      <Routes/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
