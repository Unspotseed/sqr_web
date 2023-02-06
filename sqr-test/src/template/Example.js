import { useState } from 'react';
import ModalEx from './ModalEx';

export default function Example() {
  const [clickModal, setClickModal] = useState(false);
  const handleOnClose = () => setClickModal(false);
  return (
    <>
      <div className='grid justify-items-center flex-col  h-screen bg-black'>
        <button
          onClick={() => setClickModal(true)}
          className='h-10 w-64 bg-white'
        >
          me
        </button>

        <ModalEx onClose={handleOnClose} click={clickModal} />
      </div>
    </>
  );
}
