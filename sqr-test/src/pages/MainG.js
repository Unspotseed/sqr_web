import { Link } from 'react-router-dom';

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
        <div className='bg-blue grid justify-items-stretch  mb-14'>
          <div className='flex justify-self-center justify-between w-11/12  bg-white'>
            {/* <div className='flex  '> */}
            <div className='flex bg-red  '>
              <h1 className='flex bg-green text-[30px] border-b-2'>
                Apartment
              </h1>
            </div>

            <div className='flex bg-green w-14'>
              <button className='font-Oswald font-extrabold rounded-full h-6 w-14 bg-white text-[12px]'>
                SEE MORE
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* apartment card */}
        <div className='bg-blue grid justify-items-stretch h-[325px]'>
          <div className='flex justify-self-center justify-between w-11/12'>
            <Link to='/apartmentGuest'>
              <div className='w-[240px] h-[300px] bg-green'>
                <div className='h-[150px] block bg-black'>
                  <img
                    src='https://images.pexels.com/photos/1124461/pexels-photo-1124461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    className='w-[240px] h-[150px]'
                    alt='apartment'
                  />
                </div>

                <div className='ml-3'>
                  <h1 className='text-center my-2 font-Oswald font-bold'>
                    The Mont Tower
                  </h1>
                  <p className='font-Oswald font-semibold text-[12px]'>
                    Room: 2 Rooms 1 Bath
                  </p>
                  <p className='font-Oswald font-semibold text-[12px]'>
                    Unit: 150 sqr
                  </p>

                  <div className='flex mt-7 justify-between  bg-white'>
                    <div className='font-Oswald font-semibold text-[16px]'>
                      Price: 3000 THB
                    </div>
                    <div className='bg-red'>
                      <button className='rounded-full w-[125px] h-[30px] bg-green font-Oswald text-[16px]'>
                        Request a tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className='w-[240px] h-[300px] bg-green'>
              <div className='bg-fixed h-[150px] block bg-black '>
                {/* <img
                  src='https://images.pexels.com/photos/1124461/pexels-photo-1124461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt='apartment'
                /> */}
              </div>

              <div className=''>
                <h1>The Mont Tower</h1>
                <p>Room: 2 Rooms 1 Bath</p>
                <p> Unit: 150 sqr</p>
                <div className='flex'>
                  <div className=''>Price: 3000 THB</div>
                  <div>
                    <button className='rounded-full bg-green'>
                      Request a tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[240px] h-[300px] bg-black'>me</div>
            <div className='w-[240px] h-[300px] bg-white'>me</div>
            <div className='w-[240px] h-[300px] bg-green'>me</div>
          </div>
        </div>
      </div>
    </div>
  );
}
