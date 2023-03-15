import { Link, Outlet } from 'react-router-dom';
import Dropdown from './Dropdown';
// คือการเอา ตัวข้างล่างมา render
export default function AuthFooter() {
  return (
    <>
      <nav>
        {' '}
        <div className=' bg-footer h-20 grid justify-items-stretch min-w-full'>
          <div className='flex h-20 '>
            {/* <div className='bg-footer h-20'> */}
            {/* logo sqr */}
            <Link
              to='/'
              className='flex  flex-1  w-[100px] items-center justify-center space-x-4'
            >
              {/* <div className='flex  flex-1 bg-green w-[100px] items-center justify-center space-x-4'> */}
              <div>
                <h1 className=' text-white font-Oswald text-4xl font-semibold'>
                  SQR
                </h1>
              </div>
              {/* <div className='bg-blue'>for search</div> */}
              {/* </div> */}
            </Link>

            {/* name */}
            <div className='flex flex-1 shrink-0 items-center justify-center '>
              <div className=' flex  text-wh font-Kelly text-7xl'>
                Square room
              </div>
            </div>

            {/* button sign in and Login */}
            <div className='flex-1 grid justify-items-stretch '>
              <div className=' flex justify-self-center items-center justify-center w-9/12 '>
                <div className='flex-1 grid justify-items-end '>
                  <Link to={'/orderStatus'}>
                    <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] text-white text-[24px] hover:opacity-60'>
                      Booking
                    </button>
                  </Link>
                </div>
                {/* <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                    SHT
                  </button> */}
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
