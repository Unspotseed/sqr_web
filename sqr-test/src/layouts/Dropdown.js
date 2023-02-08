import DropdownMenu from './DropdownMenu';
import { useEffect, useRef, useState } from 'react';
export default function Dropdown() {
  const [open, setOpen] = useState(false);
  // const ref = useRef(1) // { current: 1 }
  const dropdownEl = useRef(); // { current: 1 }
  useEffect(() => {
    const handleClickOutside = e => {
      // console.log(e.target);
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className='grid flex-1  justify-items-end bg-green'>
        <div ref={dropdownEl}>
          <button
            onClick={() => setOpen(!open)}
            className=' font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
          >
            STH
          </button>
          <DropdownMenu open={open} />
        </div>
      </div>
    </>
  );
}
