import { Link } from 'react-router-dom';
import Card from '../features/auth/Card';
export default function MainG() {
  return (
    <div>
      {/* body part */}
      {/* <div className='bg-bg h-[685px]'> */}
      <div
        className='bg-bg h-screen
        '
      >
        {/* text line */}
        <div className='ml-[70px] py-[50px] '>
          <h1 className='font-Oswald font-semibold text-white text-5xl'>
            Square is just the way simple
          </h1>
          <br />
          <h1 className='font-Oswald font-semibold text-white text-5xl'>
            where you were a KING
          </h1>
        </div>

        {/* apartment area */}
        <div className=' grid justify-items-stretch  mb-14 mt-10'>
          <div className='flex justify-self-center  justify-between w-10/12  '>
            {/* <div className='flex  '> */}
            <div className='flex   '>
              <h1 className='flex  text-[40px] border-b-4 font-Oswald font-semibold text-white pb-3'>
                Apartment
              </h1>
            </div>

            <div className='flex '>
              <button className='font-Oswald font-extrabold rounded-full h-7 w-20 bg-white text-[16px]'>
                SEE MORE
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* apartment card */}
        <div className='grid justify-items-stretch h-[325px]'>
          <div className='flex justify-self-center justify-between w-11/12'>
            <Link to='/apartmentGuest'>
              <div className='w-[240px] h-[300px] bg-lig '>
                <div className='h-[150px] block '>
                  <img
                    src='https://images.pexels.com/photos/1124461/pexels-photo-1124461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    className='w-[240px] h-[150px]'
                    alt='apartment'
                  />
                </div>

                <div className='ml-3'>
                  <h1 className='text-center my-2 font-Oswald font-bold text-white'>
                    The Mont Tower
                  </h1>
                  <p className='font-Oswald font-semibold text-[12px] text-white'>
                    Room: 2 Rooms 1 Bath
                  </p>
                  <p className='font-Oswald font-semibold text-[12px] text-white'>
                    Unit: 150 sqr
                  </p>

                  <div className='flex mt-7 justify-between  '>
                    <div className='font-Oswald font-semibold text-[16px] text-white'>
                      Price: 3000 THB
                    </div>
                    <div className=''>
                      <button className='ml-2 rounded-full w-[125px] h-[30px] bg-green2 font-Oswald text-[20px] font-Kenia  text-white'>
                        Request a tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
