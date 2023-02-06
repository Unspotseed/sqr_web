export default function ModalEx({ click, onClose }) {
  const handelOnClose = e => {
    if (e.target.id === 'clor') onClose();
  };
  if (!click) return null;

  return (
    <>
      <div
        id='clor'
        onClick={handelOnClose}
        stop
        className='fixed top-0 inset-0 bg-opacity-10 backdrop-blur-sm flex justify-center items-center rounded'
      >
        <div className='flex bg-sky-700 w-[760px] h-[600px]  '>
          <div className='bg-green grow'>
            <div className='flex bg-red  '>
              <h1 className='ml-28 pt-5 bg-green border-b-2 font-Oswald font-bold text-[40px]'>
                Sign Up
              </h1>
            </div>

            <div className='bg-orange-300 mt-8 ml-8'>
              <form>
                <div>
                  <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px] '>
                    First name
                  </h1>
                  <div className='flex'>
                    <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
                      {' '}
                      F
                    </div>
                    <input
                      type='text'
                      placeholder='  First name'
                      className=''
                    />
                  </div>
                </div>

                <div className='mt-2 '>
                  <h1 className=' mb-3 ml-3 font-Oswald font-bold text-[20px]'>
                    Last Name
                  </h1>
                  <div className='flex'>
                    <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
                      {' '}
                      L
                    </div>
                    <input type={'text'} placeholder=' Last Name' />
                  </div>
                </div>

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

                <div className='mt-2 '>
                  <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
                    Confirm Password
                  </h1>
                  <div className='flex'>
                    <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
                      {' '}
                      P
                    </div>
                    <input type={'text'} placeholder=' Confirm Password' />
                  </div>
                </div>

                {/* optional */}
                {/* <div className='mt-2 bg-slate-600'>
                <input type={'checkbox'} id='condition' />
                <label
                  className='ml-2 text-[8px] font-Oswald'
                  htmlFor='condition'
                  id='condition'
                >
                  I agree with terms and condition
                </label>
              </div> */}

                <div className='mt-12 ml-5 '>
                  <button
                    onClick={onClose}
                    className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
                    type='submit'
                  >
                    {' '}
                    Sign Up
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
