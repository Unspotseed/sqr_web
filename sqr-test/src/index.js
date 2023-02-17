import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './context/Auth.Context';
import RoomContextProvider from './context/RoomContextProvider';
import PaymentContextProvider from './context/PaymentContextProvider';
import OrderContextProvider from './context/OrderContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RoomContextProvider>
        <PaymentContextProvider>
          <OrderContextProvider>
            <App />
          </OrderContextProvider>
        </PaymentContextProvider>
      </RoomContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
