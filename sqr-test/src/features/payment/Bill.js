import { useState, useRef, useEffect } from 'react';
import useRoom from '../../hooks/useRoom';
import DropdownChange from './DorpdownChange';
import DropdownMonth from './SelectMonth';
import useAddOn from '../../hooks/useAddOn';

export default function Bill() {
  const [open, setOpen] = useState(false);
  const [opem, setOpem] = useState(false);
  const { selectRoom, roomSql, setRoomPrice, roomPrice } = useRoom();
  const {
    selectMonth,
    totalRoom,
    setTotalRoom,
    addTheAddOn,
    totalAddOn,
    setTotalAddOn,
    setTotalPriceA,
    totalPriceA,
  } = useAddOn();
  const dropdownE = useRef();
  useEffect(() => {
    const handleClickOutside = e => {
      if (!dropdownE.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownMonth = useRef();
  useEffect(() => {
    const handleClickOutsideMonth = e => {
      if (!dropdownMonth.current.contains(e.target)) {
        setOpem(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideMonth);
    return () =>
      document.removeEventListener('mousedown', handleClickOutsideMonth);
  }, []);

  const price = roomSql.filter(room => room.room === selectRoom);
  // console.log(price[0]?.priceRoom);
  useEffect(() => {
    setRoomPrice(price[0]?.priceRoom);
    setTotalRoom(roomPrice * selectMonth);
  }, [totalRoom, setTotalRoom, roomPrice, setRoomPrice, price, selectMonth]);

  useEffect(() => {
    const getTheAddOnPrice = addTheAddOn.reduce(
      (acc, item) => acc + item.itemPrice,
      0
    );
    setTotalAddOn(getTheAddOnPrice * selectMonth);

    // console.log(totalAddOn);
    setTotalPriceA(totalRoom + totalAddOn);
  }, [
    addTheAddOn,
    setTotalAddOn,
    totalAddOn,
    totalRoom,
    setTotalPriceA,
    selectMonth,
  ]);

  // console.log(roomPrice, '1');
  // console.log(selectMonth, '2');

  // console.log(totalRoom, '3');
  // const date = new Date();
  // const monthDate = date.getMonth();

  return (
    <>
      <div className='bg-stone-700'>
        <div className='flex justify-between mb-10'>
          <h1>Room : {selectRoom}</h1>
          <div ref={dropdownE}>
            <div onClick={() => setOpen(!open)}>Change</div>
            <DropdownChange open={open} />
          </div>
        </div>
        <div className='my-5'>Price :</div>
        <div className='bg-emerald-900 my-3'>
          <div className='bg-stone-300 my-3'>Month</div>
          <div className='bg-yellow-700 flex justify-between'>
            <div className='flex' ref={dropdownMonth}>
              Month amount{' '}
              <button
                className='bg-blue w-5 ml-4 '
                onClick={() => setOpem(!opem)}
              >
                {selectMonth}
                <DropdownMonth opem={opem} />
              </button>
            </div>
            <h1>THB {totalRoom}</h1>
          </div>
          <div className='bg-stone-300 my-3'>Add-on</div>
          {addTheAddOn.map(el => (
            <div className='bg-yellow-700 flex justify-between'>
              <h1>{el.addOn}</h1> <h1>THB {el.itemPrice}</h1>
            </div>
          ))}

          <div className='bg-stone-300 flex justify-between w-11/12 my-3'>
            <h1>Total Price</h1>
            <h1>THB {totalPriceA}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
