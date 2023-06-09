// import * as orderApi from '../apis/orderStatus-api';
import { useEffect } from 'react';
// import useRoom from '../hooks/useRoom';
import useOrder from '../hooks/useOrder';
import * as orderStatus from '../apis/orderStatus-api';
import OrderInfo from '../features/payment/OrderInfo';

export default function OrderStatus() {
  const { orderSql, setOrderInfo, showOrder } = useOrder();

  // useEffect(() => {
  //   setOrderInfo(orderSql);
  //   // console.log(orderSql, '123');
  // }, []);

  useEffect(() => {
    showOrder();
  }, []);

  // console.log(orderInfo, '-------------');
  // const roomId = orderSql.find(room => room.roomId === roomSql.);

  // const [inputOrderForm, setInputOrderForm] = useState([])
  return (
    <div>
      <div>
        {/* body */}
        <div
          className='bg-bg min-h-screen
    '
        >
          <div className='flex justify-between p-14'>
            <div className='w-[350px] h-[500px] font-semibold font-Oswald text-white'>
              <div className=' text-6xl text-center'>Booking</div>
              <div className='flex  justify-center'>
                <div className='mt-6 mb-3 w-5/12 bg-white h-1'></div>
              </div>
              <div className='text-center text-3xl'>Apartment</div>
            </div>
            <OrderInfo />

            <div className='bg-bg w-[300px] '></div>
          </div>
        </div>
      </div>
    </div>
  );
}
