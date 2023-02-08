import { useState } from 'react';
import Modal from '../../components/Modal';
import RegisterBox from './RegisterBox';

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex-1 grid justify-items-end bg-green'>
        <button
          onClick={() => setOpen(true)}
          className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
        >
          SIGN IN
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={'Sign Up'}>
        <RegisterBox onClose={() => setOpen(false)} />
      </Modal>

      {/* example using open and close */}
      {/* modal Register */}
      {/* <div
        onClick={() => setOpen(false)}
        className={` ${
          open ? '' : 'hidden'
        } flex fixed top-0 inset-0 bg-opacity-10 backdrop-blur-sm  justify-center items-center rounded`}
      >
        <div
          onClick={e => e.stopPropagation()}
          className='flex bg-sky-700 w-[760px] h-[600px]  '
        >
          <div className='bg-green grow'>
            <div className='flex bg-red  '>
              <h1 className='ml-28 pt-5 bg-green border-b-2 font-Oswald font-bold text-[40px]'>
                Sign Up
              </h1>
            </div>

            <div className='bg-orange-300 mt-8 ml-8'>
              {/* form register */}
      {/* <RegisterBox /> */}
      {/* </div> */}
      {/* </div> */}

      {/* <div className='bg-white grow-1 w-[260px] block '> */}
      {/* <img */}
      {/* src='https://images.pexels.com/photos/1671051/pexels-photo-1671051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' */}
      {/* className='h-[600px]' */}
      {/* alt='apartment' */}
      {/* /> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
