import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function DropdownMenu({ open, onClose }) {
  const { logout } = useAuth();
  return (
    <div
      className={`relative  right-[40px] top-7 bg-white  flex-col z-40 ${
        open ? '' : 'hidden'
      } `}
    >
      {/* <div className='bg-orange-700 absolute'>
        <button>Order</button>
      </div> */}
      <div className='absolute  w-[150px] '>
        <Link to={'/orderStatus'} onClick={onClose}>
          <div className='bg-orange-500 h-[40px] rounded flex justify-center'>
            <button className='font-Oswald'>Order status</button>
          </div>
        </Link>
        <div className='h-[5px]'></div>
        <div className='bg-yellow-900 h-[40px] rounded  flex justify-center'>
          <button onClick={logout} className='font-Oswald '>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
