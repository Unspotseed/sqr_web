import { Link } from 'react-router-dom';
import Bill from '../features/payment/Bill';
import PaymentOrder from '../features/payment/PaymentOrder';
import useRoom from '../hooks/useRoom';
// import { useEffect } from 'react';
import useAddOn from '../hooks/useAddOn';
import * as paymentApi from '../apis/payment-api';

export function getBookingDates(durationInMonths) {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const bookingStart = new Date(
    nextMonth.getFullYear(),
    nextMonth.getMonth(),
    1
  );
  const bookingEnd = new Date(
    bookingStart.getFullYear(),
    bookingStart.getMonth() + durationInMonths,
    0
  );
  return { startDate: bookingStart, endDate: bookingEnd };
}

export default function PaymentPage() {
  const { floor, roomSql, setFloor, selectRoom } = useRoom();
  const {
    addOnSql,
    setAddOnShow,
    addOnShow,
    setAddTheAddOn,
    addTheAddOn,
    selectMonth,

    totalPriceA,
    aaa,
    setAAA,
  } = useAddOn();

  // timeOrigin()
  /*
  useEffect(() => {
    const adc = async () => {
      const res = await paymentApi.postOrder({
        order: '123',
        month: '3',
        roomId: '4',
        totalPrice: '3000',
        timeStart: '2023-02-14',
        timeEnd: '2023-03-14',
      });
      setAAA(res.data);
      console.log(res.data);
    };
    adc();
  }, [setAAA]);
  */

  const date = getBookingDates(selectMonth);
  console.log(date);

  const roomId = roomSql.find(room => room.room === selectRoom);
  // console.log(roomId.id, 'RoomId');

  const handleOnClickRoom = async () => {
    const res = await paymentApi.postOrder({
      order: '123',
      month: selectMonth,
      // roomId: selectRoom,
      roomId: roomId.id,
      totalPrice: totalPriceA,
      timeStart: date.startDate,
      timeEnd: date.endDate,
    });
    setAAA(res.data);
    // console.log(res.data);
    // console.log(selectRoom);
    console.log(selectMonth);
  };

  // console.log(selectRoom, 'selectRoom');
  console.log(aaa, 'aaaa');
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
              setAddTheAddOn={setAddTheAddOn}
              addTheAddOn={addTheAddOn}
            />
          </div>
          <div className='bg-blue w-[350px] '>
            <Bill />
          </div>
          <div className='bg-cyan-800 w-[300px] h-auto'>
            3<div className='bg-white h-[400px]'></div>
            <br />
            <div className='flex-1 grid justify-items-center bg-red'>
              <button
                onClick={handleOnClickRoom}
                className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
