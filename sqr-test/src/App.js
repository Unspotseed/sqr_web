// import Router from './routes/Router';
// import MainT from './template/MainT';
// import SignUp from './template/SignUpBox';
// import Login from './template/Login';
// import MainP from './template/MainP';
// import Booling_Ex from './template/Booling_Ex';

// import Example from './template/Example';
import { ToastContainer } from 'react-toastify';
import Router from './routes/Router';
// import Apartment_ex from './template/Apartment_ex';
function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      {/* <Apartment_ex /> */}
      {/* <Booling_Ex /> */}

      {/* <MainT /> */}
      {/* <MainP /> */}
      {/* <SignUp /> */}
      {/* <Example /> */}
      {/* <Login /> */}
      {/* <Router /> */}
    </>
  );
}

export default App;
