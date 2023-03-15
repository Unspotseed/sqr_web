import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as orderStatus from '../../apis/orderStatus-api';
import useOrder from '../../hooks/useOrder';
import RefButton from './RefButton';

export default function OrderInfo() {
  const navigate = useNavigate();
  const { setOrderInfo, orderInfo, orderSql } = useOrder();
  const handelOnClickDelete = async id => {
    const res = await orderStatus.cancelBooking(id);
    setOrderInfo(res.data.bookingUpdateStatus);
    navigate(0);
  };
  return (
    <div className=' w-[650px] h-auto '>
      {orderSql.map(el => (
        <div
          className=' h-auto font-Oswald font-semibold text-white mt-8 '
          key={el.id}
        >
          <div
            className='bg-footer  h-14 flex justify-center
           '
          >
            <div className='w-10/12 flex justify-between items-center '>
              <div className='text-2xl'>Order #{el.id}</div>
              <div
                className={`border-4  ${
                  el.status === 'PENDING'
                    ? 'bg-gold border-gold'
                    : el.status === 'FAIL'
                    ? 'bg-red border-red'
                    : 'bg-green2 border-green2'
                } px-5 rounded-xl text-3xl`}
              >
                PAYMENT {el.status}
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='w-9/12 space-y-3 '>
              <div className='flex justify-between'>
                Room
                <div>{el.Room.room}</div>
              </div>
              <div className='flex justify-between'>
                Duration <div>{el.month}</div>{' '}
              </div>
              <div className=' flex justify-between'>
                Start
                <div>{el.timeStart}</div>
              </div>
              <div className='flex justify-between'>
                End
                <div>{el.timeEnd}</div>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-5 pb-3'>
            <div className='w-6/12  flex justify-between'>
              <RefButton bookingId={el.id} />

              <button
                className='bg-red w-16 rounded hover:opacity-60'
                onClick={() => handelOnClickDelete(el.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
