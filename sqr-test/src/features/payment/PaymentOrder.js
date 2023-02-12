import { useEffect, useState, useRef } from 'react';

export default function PaymentOrder({
  floor,
  roomSql,
  setFloor,
  addOnSql,
  setAddOnShow,
  addOnShow,
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
        console.log('err');
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

  return (
    <>
      <div>
        <div>
          <div className='bg-yellow-400 h-[50px] border-b-4'>
            <h1>PaymentOrder</h1>
          </div>
          <h1> #0001</h1>
        </div>
        <div className='bg-teal-800 my-10'>
          <h1>The Mont tower</h1>
          <div className='bg-lime-200' ref={dropdownE}>
            <button onClick={() => setOpen(!open)}>{floor} th Floor</button>
            <div
              className={`relative  flex-col bg-stone-600  ${
                open ? '' : 'hidden'
              }`}
            >
              <div className='absolute flex space-x-4 top-[5px]'>
                {changeFloor.map(el => (
                  <button
                    key={el.floor}
                    className='bg-cyan-300 w-5'
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
          <div>Add-on</div>
          <div className='bg-purple-400'>
            {addOnShow.map(el => (
              <div className='flex justify-between' key={el.addOn}>
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
