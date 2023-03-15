import { useEffect } from 'react';

export default function AdminSelectFloor({
  roomFloor,
  setRoomFloor,
  roomSql,
  setFloor,
  setCurrentFloor1,
  setCurrentFloor2,
}) {
  useEffect(() => {
    const countStatus = roomSql.reduce((acc, item) => {
      if (item.status === 'AVAILABLE') {
        let idx = acc.findIndex(el => el.floor === item.floor);
        if (idx === -1) {
          acc.push({
            floor: item.floor,
            available: 1,
            hold: 1,
            unavailable: 1,
          });
        } else {
          acc[idx].available += 1;
        }
      }

      return acc;
    }, []);

    const sortAllFloor = countStatus.sort((a, b) => b.floor - a.floor);
    setRoomFloor(sortAllFloor);
  }, [setRoomFloor, roomSql]);
  const handleOnclick = floor => {
    setFloor(floor);
    const floorSth = roomSql.filter(room => room.floor === floor);

    setCurrentFloor1(floorSth.slice(0, 4));
    setCurrentFloor2(floorSth.slice(4, 8));
    // console.log(floorSth);
  };

  // useEffect(() => {}, []);
  return (
    <>
      <div>
        <h1 className='text-white text-5xl font-semibold'>The Mont Tower</h1>
        <div className=' mt-10'>
          <div className='grid justify-items-center'>
            {roomFloor.map(el => (
              <div
                key={el.floor}
                className='  flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px] items-center hover:opacity-60 font-Oswald'
              >
                <button
                  className='text-3xl font-semibold text-white'
                  onClick={() => handleOnclick(el.floor)}
                >
                  {' '}
                  {el.floor} th Floor
                </button>
                <div>
                  <h2 className='text-white'>Available {el.available} Rooms</h2>
                  <h2 className='text-white'>Holding {el.hold} Rooms</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
