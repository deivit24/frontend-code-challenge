import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/Home'
import Admin from '../components/Admin'
import AdminLogin from '../components/AdminLogin'
import Signup from '../components/Signup'

const Routes = () => {
  return (
   <Switch>
     <Route exact path='/'>
        <Home/>
     </Route>
     <Route exact path='/signup'>
        <Signup/>
     </Route>
     <Route exact path='/admin-login' >
        <AdminLogin/>
     </Route>
     <PrivateRoute exact path='/admin'>
     <Admin/>
     </PrivateRoute>
     
   </Switch>
  )
}

export default Routes
