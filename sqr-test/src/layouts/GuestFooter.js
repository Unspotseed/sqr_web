import RegisterContainer from '../features/auth/RegisterContainer';
import LoginButton from '../features/auth/LoginButton';
import { Link, Outlet } from 'react-router-dom';
// คือการเอา ตัวข้างล่างมา render
export default function GuestFooter() {
  return (
    <>
      <nav>
        <div className=' bg-footer h-20 grid justify-items-stretch'>
          <div className='flex h-20 '>
            {/* <div className='bg-footer h-20'> */}
            {/* logo sqr */}

            <div className='flex  flex-1 bg-green w-[100px] items-center justify-center space-x-4'>
              <Link to='/'>
                <div>
                  <h1 className='  bg-red font-Oswald'>SQR</h1>
                </div>
              </Link>
              <div className='bg-blue'>for search</div>
            </div>

            {/* name */}
            <div className='flex flex-1 shrink-0 items-center justify-center'>
              <div className=' flex  bg-green font-Kelly text-7xl'>
                Square room
              </div>
            </div>

            {/* button sign in and Login */}
            <div className='flex-1 grid justify-items-stretch bg-white '>
              <div className=' flex justify-self-center items-center justify-center w-9/12 bg-black'>
                <LoginButton />
                <RegisterContainer />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
