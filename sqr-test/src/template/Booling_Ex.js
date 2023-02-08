export default function Booling_Ex() {
  return (
    <div>
      <div>
        <div className=' bg-footer h-20 grid justify-items-stretch'>
          <div className='flex h-20 '>
            {/* <div className='bg-footer h-20'> */}
            {/* logo sqr */}

            <div className='flex  flex-1 bg-green w-[100px] items-center justify-center space-x-4'>
              <div>
                <h1 className='  bg-red font-Oswald'>SQR</h1>
              </div>
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
                <div className='flex-1 grid justify-items-end bg-red'>
                  <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                    Booking
                  </button>
                </div>
                <div className='flex-1 grid justify-items-end bg-green'>
                  <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                    SHT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <div className='flex-1 grid justify-items-center bg-red'>
                <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                  Confirm Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
