import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../helpers/UserContext';

const PrivateRoute = ({ exact, path, children }) => {
  const {adminUser } = useContext(UserContext);

  if (!adminUser) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
