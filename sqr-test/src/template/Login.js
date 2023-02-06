export default function Login() {
  return (
    <>
      <div className='grid justify-items-center flex-col  h-screen bg-black'>
        <div className='bg-sky-700 w-[760px] h-[600px] my-auto flex'>
          <div className='bg-green grow'>
            <div className='flex bg-red  '>
              <h1 className='ml-28 pt-5 bg-green border-b-2 font-Oswald font-bold text-[40px]'>
                Login
              </h1>
            </div>

            <div className='bg-orange-300 mt-8 ml-8'>
              <form>
                <div className='mt-2 '>
                  <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
                    Email
                  </h1>
                  <div className='flex'>
                    <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
                      {' '}
                      E
                    </div>
                    <input type={'text'} placeholder=' Email' />
                  </div>
                </div>

                <div className='mt-2 '>
                  <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
                    Password
                  </h1>
                  <div className='flex'>
                    <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
                      {' '}
                      P
                    </div>
                    <input type={'text'} placeholder=' Password' />
                  </div>
                </div>

                <div className='mt-12 ml-5 '>
                  <button
                    className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
                    type='submit'
                  >
                    {' '}
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='bg-white grow-1 w-[260px] block '>
            <img
              src='https://images.pexels.com/photos/1671051/pexels-photo-1671051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              className='h-[600px]'
              alt='apartment'
            />
          </div>
        </div>
      </div>
    </>
  );
}
