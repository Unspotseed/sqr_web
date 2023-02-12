import { Link } from 'react-router-dom';
import Bill from '../features/payment/Bill';
import PaymentOrder from '../features/payment/PaymentOrder';
import useRoom from '../hooks/useRoom';
import useAddOn from '../hooks/useAddOn';

export default function PaymentPage() {
  const { floor, roomSql, setFloor } = useRoom();
  const { addOnSql, setAddOnShow, addOnShow } = useAddOn();

  return (
    <div>
      {' '}
      <div
        className='bg-bg h-screen
'
      >
        <div className='flex justify-between p-14'>
          <div className='bg-red w-[350px] h-[500px]'>
            <Link to={'/booking'}>
              <button className='bg-green'>Back</button>
            </Link>
            <PaymentOrder
              floor={floor}
              roomSql={roomSql}
              setFloor={setFloor}
              addOnSql={addOnSql}
              setAddOnShow={setAddOnShow}
              addOnShow={addOnShow}
            />
          </div>
          <div className='bg-blue w-[350px] '>
            <Bill />
          </div>
          <div className='bg-cyan-800 w-[300px] h-auto'>
            3<div className='bg-white h-[400px]'></div>
            <br />
            <div className='flex-1 grid justify-items-center bg-red'>
              <button className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
