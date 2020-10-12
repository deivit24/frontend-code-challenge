import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {BASE_URL} from '../App'
import UserContext from '../helpers/UserContext';

const AdminTable = () => {

  const [users, setUsers] = useState([]);
  const { darkMode, setDarkMode } = useContext(UserContext);
  let color;
 
  !darkMode ? color = 'light' : color ='dark'
  
  useEffect(() => {
    async function getUsers() {
      let users = await axios.get(`${BASE_URL}`);

      setUsers(users.data);
    }
    
    getUsers();
  }, []);

  
  if (!users) {
    return <h1>Loading...</h1>;
  }
  console.log(users);
  const handleDelete = async (id) => {
    try{
        await axios.delete(`${BASE_URL}/${id}`)
  } catch(e) {
          console.log(e);
        }
        async function getUsers() {
          let users = await axios.get(`${BASE_URL}`);
    
          setUsers(users.data);
        }
        
        getUsers();
  }
  return (
    <>
        <table className={`table table-${color} mb-3`}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody >
        {users.map((user) => (
            <tr>
            <th scope="row">{user.id}</th>
            <td>{user.email}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.state} </td>
            <td><i onClick={() => handleDelete(user.id)} className="fas fa-trash text-danger"></i></td>
        </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default AdminTable
