// import RegisterContainer from '../features/auth/RegisterContainer';
// import LoginButton from '../features/auth/LoginButton';
// import Modal from '../components/Modal';
// import LoginBox from '../features/auth/LoginBox';
import BookingGuestButton from '../features/auth/BookingGuestButton';

export default function ApartmentGuest() {
  return (
    <div>
      <div>
        {/* body */}
        <div
          className='bg-bg h-screen
    '
        >
          <div className='flex justify-between p-14'>
            <div className='bg-red w-[350px] h-[500px]'>1</div>
            <div className='bg-blue w-[350px] '>2</div>
            <div className='bg-cyan-800 w-[300px] h-auto'>
              3<div className='bg-white h-[400px]'></div>
              <br />
              {/* <div className='flex-1 grid justify-items-center bg-red'>
                <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                  Booking
                </button>
                
              </div> */}
              <BookingGuestButton />
              <br />
              <div className='flex-1 grid justify-items-center bg-green'>
                <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                  STH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
