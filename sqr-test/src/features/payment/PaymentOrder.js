import { useEffect, useState, useRef } from 'react';

export default function PaymentOrder({
  floor,
  roomSql,
  setFloor,
  addOnSql,
  setAddOnShow,
  addOnShow,
  setAddTheAddOn,
  addTheAddOn,
}) {
  const [open, setOpen] = useState(false);
  const dropdownE = useRef();
  const [changeFloor, setChangeFloor] = useState([]);
  useEffect(() => {
    setAddOnShow(addOnSql);

    const showFloor = roomSql.reduce((acc, item) => {
      let idx = acc.findIndex(el => el.floor === item.floor);
      if (idx === -1) {
        acc.push({ floor: item.floor });
      } else {
        // console.log('err');
      }
      return acc;
    }, []);

    const sortChangeFloor = showFloor.sort((a, b) => b.floor - a.floor);
    setChangeFloor(sortChangeFloor);
    // console.log(changeFloor);

    const handleClickOutside = e => {
      if (!dropdownE.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [roomSql, addOnSql, setAddOnShow]);

  const handleOnClickFloor = floor => setFloor(floor);

  const handleClickGetAddOn = addOn => {
    const cloneAddOn = [...addTheAddOn];
    cloneAddOn.push(addOn);
    setAddTheAddOn(cloneAddOn);
  };
  // console.log(addOnSql);
  // console.log(addOnShow, 'addOnShow');

  return (
    <>
      <div>
        <div>
          <div className=' h-[50px] '>
            <h1 className='text-white text-4xl font-Oswald font-semibold mt-5 flex justify-center bg-footer items-center h-20 '>
              Payment Order
            </h1>
          </div>
        </div>
        <div className=' my-10'>
          <h1 className='flex justify-center font-Oswald font-semibold text-4xl text-white py-10'>
            The Mont tower
          </h1>
          <div className='' ref={dropdownE}>
            <div
              className='font-Oswald font-semibold text-2xl ml-7 text-white'
              onClick={() => setOpen(!open)}
            >
              {floor} th Floor
            </div>
            <div
              className={`relative  flex-col bg-stone-600  ${
                open ? '' : 'hidden'
              }`}
            >
              <div className='absolute flex space-x-4 top-[5px]'>
                {changeFloor.map(el => (
                  <button
                    key={el.floor}
                    className='bg-gold text-white font-Oswald font-semibold
                     w-5'
                    onClick={() => handleOnClickFloor(el.floor)}
                  >
                    {el.floor}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-center items-center mb-10'>
            <div className='w-8/12  text-white font-Oswald font-semibold flex justify-center text-2xl bg-footer h-14 items-center'>
              Add-on
            </div>
          </div>
          <div className=''>
            {addOnShow.map(el => (
              <div
                className='flex justify-between mb-3 font-semibold font-Oswald text-white text-2xl'
                key={el.addOn}
                onClick={() => handleClickGetAddOn(el)}
              >
                <h1 key={el.addOn}> {el.addOn}</h1>{' '}
                <h1 key={el.itemPrice}>{el.itemPrice}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
