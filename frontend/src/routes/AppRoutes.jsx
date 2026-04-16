import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../core/guards/ProtectedRoute';
import Dashboard from '../features/dashboard/Dashboard';
import keycloak from '../core/auth/keycloak';
import authProvider from '../core/auth/authProvider';
import { SDashboard } from '../features/SDashboard/SDashboard';
import { PDashboard } from '../features/PDashboard/PDashboard';
import Users from '../features/users/Users';

const AppRoutes = () => {
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    keycloak.logout({ redirectUri: "http://localhost:5173" });
  };

  const HomePage = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px' }}>
      <span>Welcome, {authProvider.getUser()?.username}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<ProtectedRoute role="ADMIN"><Dashboard /></ProtectedRoute>}>
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/professor" element={<ProtectedRoute role="PROF"><PDashboard /></ProtectedRoute>} />
        <Route path="/student" element={<ProtectedRoute role="STUDENT"><SDashboard /></ProtectedRoute>} />
        <Route path="/unauthorized" element={<div style={{ padding: '20px' }}>Unauthorized Access</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
