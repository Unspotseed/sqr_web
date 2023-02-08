import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export function RedirectIfAuth({ children }) {
  // children mean login page
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to={'/'} />;
    // if login go to root path
  }
  return children;
}

export function RedirectToBooking({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to={'/booking'} />;
  }
  return children;
}
