import { useEffect } from 'react';

export default function SelectFloor({
  roomFloor,
  setRoomFloor,
  roomSql,
  setFloor,
  setCurrentFloor1,
  setCurrentFloor2,
}) {
  // const [floorStatus, setFloorStatus] = useState([]);

  // setFloorStatus = floorSth.filter(room => room.status === 'AVAILABLE').length;
  // console.log(roomSql.filter(room => room.floor));
  useEffect(() => {
    // const countStatus = roomSql.reduce((acc, item, i) => {
    //   if (item.status === 'AVAILABLE') {
    //     if (!acc[item.floor]) {
    //       acc[item.floor] = 0; // tell floor
    //     }
    //     acc[item.floor] += 1; // tell amount
    //     console.log(item.status);
    //   }
    //   return acc;
    // }, []);
    const countStatus = roomSql.reduce((acc, item) => {
      if (item.status === 'AVAILABLE') {
        let idx = acc.findIndex(el => el.floor === item.floor);
        if (idx === -1) {
          // acc.floor = item.floor;
          acc.push({ floor: item.floor, aval: 1 });
          // let itemAdd = item.status === 'AVAILABLE' ? 1 : 0;
          // acc.aval = 1;
        } else {
          acc[idx].aval += 1;
        }
      }

      return acc;
    }, []);

    // setRoomFloor(countStatus);

    // console.log(countStatus, ' acc'); // ++++++++
    // setRoomFloor(countStatus);
    // const sortFloor = countStatus.sort(
    //   (a, b) => Object.keys(b)[0] - Object.keys(a)[0]
    // );
    // console.log(sortFloor);
    // console.log(countStatus, ' count status');  // ++++++++

    // const allFloor = roomSql.reduce((acc, item) => {
    //   if (!acc.includes(item.floor)) {
    //     acc.push(item.floor);
    //   }
    //   return acc;
    // }, []);
    // console.log(roomSql);
    // console.log(allFloor);

    const sortAllFloor = countStatus.sort((a, b) => b.floor - a.floor);
    // console.log(sortAllFloor, 'set');
    setRoomFloor(sortAllFloor);

    // setRoomFloor(sortAllFloor);
  }, [setRoomFloor, roomSql]);

  const handleOnclick = floor => {
    setFloor(floor);
    // console.log(floor);
    const floorSth = roomSql.filter(room => room.floor === floor);
    // console.log(roomSql, 'roomSql');
    // console.log(floorSth, '123123123');

    setCurrentFloor1(floorSth.slice(0, 4));
    setCurrentFloor2(floorSth.slice(4, 8));

    // const floorStatus = floorSth.filter(
    //   room => room.status === 'AVAILABLE'
    // ).length;

    // setFloorStatus(floorStatus);
    // console.log(floorStatus);
  };

  return (
    <>
      <div>
        <h1>The Mont Tower</h1>
        <div className='bg-orange-400 mt-10'>
          <div className='grid justify-items-center'>
            {roomFloor.map(el => (
              <div
                key={el.floor}
                className=' bg-yellow-500 flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px]'
              >
                <button onClick={() => handleOnclick(el.floor)}>
                  {' '}
                  {el.floor}==th Floor
                </button>
                <h2>Available {el.aval} Rooms</h2>
              </div>
            ))}

            {/* <div className=' bg-yellow-500 flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px]'>
              <button onClick={() => handleOnclick('5')}>5 th Floor</button>
              <h2>Available {} Rooms</h2>
            </div>
          </div>
          <div className='grid justify-items-center'>
            <div className=' bg-yellow-500 flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px]'>
              <button onClick={() => handleOnclick('4')}>4 th Floor</button>
              <h2>Available Rooms</h2>
            </div>
          </div>
          <div className='grid justify-items-center'>
            <div className=' bg-yellow-500 flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px]'>
              <button onClick={() => handleOnclick('3')}>3 th Floor</button>
              <h2>Available Rooms</h2>
            </div>
          </div>
          <div className='grid justify-items-center'>
            <div className=' bg-yellow-500 flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px]'>
              <button onClick={() => handleOnclick('2')}>2 nd Floor</button>
              <h2>Available Rooms</h2>
            </div>
          </div>
          <div className='grid justify-items-center'>
            <div className=' bg-yellow-500 flex justify-between w-11/12 border-b-4 border-zinc-50 h-[80px]'>
              <button onClick={() => handleOnclick('1')}>1 st Floor</button>
              <h2>Available Rooms</h2>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
