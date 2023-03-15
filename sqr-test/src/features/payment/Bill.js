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
      <div className='mt-16 '>
        <div className='flex justify-between mb-10 font-Oswald font-semibold text-white'>
          <h1 className='font-Oswald text-4xl font-semibold text-white'>
            Room : {selectRoom}
          </h1>
          <div ref={dropdownE}>
            <div onClick={() => setOpen(!open)}>Change</div>
            <DropdownChange open={open} />
          </div>
        </div>
        <div className='mb-5 pt-10 font-Oswald text-3xl font-semibold text-white'>
          Price :
        </div>
        <div className=' my-3'>
          <div className='bg-footer h-14 flex items-center'>
            <div className=' ml-4  my-3 text-white font-Oswald font-semibold text-2xl'>
              Months
            </div>
          </div>
          <div className=' flex justify-between mt-5  font-Oswald text-white font-semibold text-3xl'>
            <div className='flex' ref={dropdownMonth}>
              {' '}
              <button
                className='bg-footer  text-white font-Oswald font-semibold w-5 ml-4 '
                onClick={() => setOpem(!opem)}
              >
                {selectMonth}
                <DropdownMonth opem={opem} />
              </button>
            </div>
            <h1>THB {totalRoom}</h1>
          </div>
          <div className='bg-footer h-14 flex items-center mt-20 mb-5'>
            <div className='ml-4  text-white font-Oswald font-semibold text-2xl'>
              Add-on
            </div>
          </div>
          {addTheAddOn.map(el => (
            <div
              key={el.id}
              className=' flex justify-between text-white font-Oswald font-semibold space-y-2'
            >
              <h1>{el.addOn}</h1> <h1>THB {el.itemPrice}</h1>
            </div>
          ))}
          <div className='bg-footer h-14 flex items-center justify-center mt-3 mb-5'>
            <div className=' flex justify-between w-11/12 my-3 font-Oswald font-semibold text-2xl text-white'>
              <h1>Total Price</h1>
              <h1>THB {totalPriceA}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
