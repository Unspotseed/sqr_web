import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Apartment from '../pages/ApartmentPage';
import BookingPage from '../pages/BookingPage';
import MainG from '../pages/MainG';
import MainPage from '../pages/MainPage';
import OrderStatus from '../pages/OrderStatusPage';

const router = createBrowserRouter([
  { path: '/guest', element: <MainG /> },
  { path: '/', element: <MainPage /> },

  { path: '/apartment', element: <Apartment /> },
  { path: '/booking', element: <BookingPage /> },
  { path: '/orderStatus', element: <OrderStatus /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// นี่คือการสร้าง route ว่ามี path ไปไหนบ้าง เเละ เอาไปไว้ใน  app js
