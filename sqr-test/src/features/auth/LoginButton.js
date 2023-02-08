import { useState } from 'react';
import Modal from '../../components/Modal';
import LoginBox from './LoginBox';

export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex-1 grid justify-items-end bg-red'>
        <button
          onClick={() => setOpen(true)}
          className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
        >
          LOGIN
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={'Login'}>
        <LoginBox onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
