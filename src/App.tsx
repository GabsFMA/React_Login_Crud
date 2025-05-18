import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import TaskPage from './pages/taskPage'; 
import UserPage from './pages/userPage'; 
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<UserPage />} />
        <Route path="/task" element={<TaskPage />} />
      </Route>
    </Routes>
  );
}

export default App;
