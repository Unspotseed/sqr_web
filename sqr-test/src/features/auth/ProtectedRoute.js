import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  // children mean login page
  const { authenticatedUser } = useAuth();
  if (!authenticatedUser) {
    return <Navigate to={'/guest'} />;
    // if no auth redirect to login
  }
  return children;
}
