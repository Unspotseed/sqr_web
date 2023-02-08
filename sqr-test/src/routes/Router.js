import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import {
  RedirectIfAuth,
  RedirectToBooking,
} from '../features/auth/RedirectIfAuthen';
import AuthFooter from '../layouts/Authfooter';
import GuestFooter from '../layouts/GuestFooter';
import ApartmentGuest from '../pages/ApartmentGuest';
import Apartment from '../pages/ApartmentPage';
import BookingPage from '../pages/BookingPage';
import MainG from '../pages/MainG';
import MainPage from '../pages/MainPage';
import OrderStatus from '../pages/OrderStatusPage';
import PaymentPage from '../pages/PaymentPage';

const router = createBrowserRouter([
  {
    element: <GuestFooter />,
    children: [
      {
        path: '/guest',
        element: (
          <RedirectIfAuth>
            <MainG />
          </RedirectIfAuth>
          // จะเข้า login page ได้แปลว่าคุณต้องห้าม login
        ),
      },

      {
        path: '/apartmentGuest',
        element: (
          <RedirectToBooking>
            <ApartmentGuest />
          </RedirectToBooking>
        ),
      },
    ],
  },

  {
    // when no path คือ path อะไรก็ตามที่ไม่ใช่ layout  จะเข้า layout and auto render
    element: (
      <ProtectedRoute>
        <AuthFooter />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: (
          /*
//version 1
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
          */
          <MainPage />
        ),
      },
      {
        path: '/apartment',
        element: <Apartment />,
      },

      {
        path: '/booking',
        element: <BookingPage />,
      },
      {
        path: '/payment',
        element: <PaymentPage />,
      },
      {
        path: '/orderStatus',
        element: <OrderStatus />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// นี่คือการสร้าง route ว่ามี path ไปไหนบ้าง เเละ เอาไปไว้ใน  app js
