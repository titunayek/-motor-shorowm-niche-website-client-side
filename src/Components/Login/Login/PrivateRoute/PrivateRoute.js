import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const auth = useAuth();
  return auth ? Children : <Navigate to="/login" />;
}
export default PrivateRoute;