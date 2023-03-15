// import useAuth from '../hooks/useAuth';
import AdminOrder from '../pages/AdminOrder';
import OrderStatus from '../pages/OrderStatusPage';
import jwtdecode from 'jwt-decode';
import { getAccessToken } from '../utils/local-storage';
export default function OrderStatusRole() {
  // const { authenticatedUser } = useAuth();
  const token = getAccessToken();
  const decodedtoken = jwtdecode(token);
  // const navigate = useNavigate();

  if (decodedtoken?.roll === 'ADMIN') {
    // navigate(0);
    return <AdminOrder />;
  } else if (decodedtoken?.roll === 'USER') {
    return <OrderStatus />;
  }
}
