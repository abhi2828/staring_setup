import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthHook';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;