import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../core/guards/ProtectedRoute';
import Dashboard from '../features/dashboard/Dashboard';
import keycloak from '../core/auth/keycloak';
import authProvider from '../core/auth/authProvider';
import { SDashboard } from '../features/SDashboard/SDashboard';
import { PDashboard } from '../features/PDashboard/PDashboard';
import Users from '../features/users/Users';

const AppRoutes = () => {
  const logout = () => {
  localStorage.clear();
  sessionStorage.clear();

  keycloak.logout({
    redirectUri: "http://localhost:5173"
  });
};
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <button onClick={logout}>Logout</button>
          {authProvider.getUser()?.username}
        </>} />
        <Route path='/admin' element={<ProtectedRoute role="ADMIN"><Dashboard /></ProtectedRoute>} >
          <Route path="users" element={<ProtectedRoute role="ADMIN"><Users /></ProtectedRoute>} />
        </Route>
          <Route path='/professor' element={<ProtectedRoute role="PROF"><PDashboard /></ProtectedRoute>} >
          {/* <Route path="courses" element={<ProtectedRoute role="PROF"><CoursesPage /></ProtectedRoute>} /> */}
          {/* <Route path="exams" element={<ProtectedRoute role="PROF"><ExamsPage /></ProtectedRoute>} /> */}
        </Route>

          <Route path='/student' element={<ProtectedRoute role="STUDENT"><SDashboard /></ProtectedRoute>} >
          {/* <Route path="courses" element={<ProtectedRoute role="STUDENT"><CoursesPage /></ProtectedRoute>} /> */}
          {/* <Route path="exams" element={<ProtectedRoute role="STUDENT"><ExamsPage /></ProtectedRoute>} /> */}
        </Route>
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
