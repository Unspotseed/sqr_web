// import { useNavigate } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import Admin from '../pages/Admin';
import BookingPage from '../pages/BookingPage';
import { getAccessToken } from '../utils/local-storage';
import jwtdecode from 'jwt-decode';

export default function BookingRole() {
  const token = getAccessToken();
  const decodedtoken = jwtdecode(token);

  if (decodedtoken?.roll === 'ADMIN') {
    // navigate(0);
    return <Admin />;
  } else if (decodedtoken?.roll === 'USER') {
    return <BookingPage />;
  }
}
