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
              className='flex  flex-1 bg-green w-[100px] items-center justify-center space-x-4'
            >
              {/* <div className='flex  flex-1 bg-green w-[100px] items-center justify-center space-x-4'> */}
              <div>
                <h1 className='  bg-red font-Oswald'>SQR</h1>
              </div>
              <div className='bg-blue'>for search</div>
              {/* </div> */}
            </Link>

            {/* name */}
            <div className='flex flex-1 shrink-0 items-center justify-center '>
              <div className=' flex  bg-green font-Kelly text-7xl'>
                Square room
              </div>
            </div>

            {/* button sign in and Login */}
            <div className='flex-1 grid justify-items-stretch bg-white '>
              <div className=' flex justify-self-center items-center justify-center w-9/12 bg-black'>
                <div className='flex-1 grid justify-items-end bg-red'>
                  <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                    Booking
                  </button>
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
