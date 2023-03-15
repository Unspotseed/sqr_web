import { useState } from 'react';
import Modal from '../../components/Modal';
import LoginBox from './LoginBox';

export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex-1 grid justify-items-end'>
        <button
          onClick={() => setOpen(true)}
          className='font-Oswald font-semibold rounded-full h-[40px] w-[125px] bg-white text-[24px] hover:opacity-60'
        >
          LOGIN
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={'LOGIN'}>
        <LoginBox onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
