// import * as orderApi from '../apis/orderStatus-api';
import { useEffect, useState } from 'react';
// import useRoom from '../hooks/useRoom';
import useOrder from '../hooks/useOrder';
import * as orderStatus from '../apis/orderStatus-api';
import Modal from '../components/Modal';
import BookingRefForm from '../features/payment/BookingRefForm';

export default function OrderStatus() {
  const [open, setOpen] = useState(false);
  const { orderSql, setOrderInfo, orderInfo, showOrder } = useOrder();
  useEffect(() => {
    showOrder();
  }, []);

  useEffect(() => {
    setOrderInfo(orderSql);
    // console.log(orderSql, '123');
  }, [orderSql, setOrderInfo]);

  const handelOnClickDelete = async id => {
    const res = await orderStatus.cancelBooking(id);
    setOrderInfo(res.data.bookingUpdateStatus);
  };
  handelOnClickDelete();
  // console.log(orderInfo, '-------------');
  // const roomId = orderSql.find(room => room.roomId === roomSql.);

  // const [inputOrderForm, setInputOrderForm] = useState([])
  return (
    <div>
      <div>
        {/* body */}
        <div
          className='bg-bg h-screen
    '
        >
          <div className='flex justify-between p-14'>
            <div className='bg-red w-[350px] h-[500px]'>1</div>
            <div className='bg-blue w-[650px] h-auto '>
              {orderInfo.map(el => (
                <div className='bg-zinc-600 h-40 ' key={el.id}>
                  <div className='flex'>
                    <div className='bg-lime-900 '>Order {el.id}</div>
                    <div className='bg-orange-800'>Room {el.Room.room}</div>
                    <div className='bg-amber-300'>Start {el.timeStart}</div>
                    <div className='bg-cyan-300 '>Duration {el.month}</div>
                    <div className='bg-amber-300'>End {el.timeEnd}</div>
                  </div>
                  <div className='flex justify-center mt-5'>
                    <div className='w-6/12 bg-neutral-400 flex justify-between'>
                      <div>
                        <button
                          onClick={() => setOpen(true)}
                          className='bg-yellow-200'
                        >
                          ref
                        </button>
                        <Modal
                          open={open}
                          onClose={() => setOpen(false)}
                          title={'Booking Ref'}
                        >
                          <BookingRefForm
                            onClose={() => setOpen(false)}
                            bookingId={el.id}
                          />
                        </Modal>
                      </div>

                      <button
                        className='bg-sky-300'
                        onClick={() => handelOnClickDelete(el.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='bg-cyan-800 w-[300px] '></div>
          </div>
        </div>
      </div>
    </div>
  );
}
