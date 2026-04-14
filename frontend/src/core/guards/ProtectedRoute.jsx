import { Navigate } from 'react-router-dom';
import authProvider from '../auth/authProvider';

const ProtectedRoute = ({ children ,role}) => {
  const isAuthenticated = authProvider.isAuthenticated();
  const roles = authProvider.getUser()?.roles || [];
  console.log(roles)
   if (role && !roles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
