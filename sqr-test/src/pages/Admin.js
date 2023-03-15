import { useEffect, useState } from 'react';
import AdminRoomBox from '../features/Admin/AdminRoomBox';
import AdminRoomHolding from '../features/Admin/AdminRoomHolding';
import AdminSelectFloor from '../features/Admin/AdminSelectFloor';
import useRoom from '../hooks/useRoom';
import * as status from '../apis/orderStatus-api';
import { useNavigate } from 'react-router-dom';
export default function Admin() {
  const navigate = useNavigate();
  const { roomSql, selectRoom, floor, setFloor } = useRoom();
  const [roomFloor, setRoomFloor] = useState([]);
  const [currentFloor1, setCurrentFloor1] = useState([]);
  const [currentFloor2, setCurrentFloor2] = useState([]);

  const selectRoomAvailable = async selectRoom => {
    const roomS = roomSql.find(roomS => roomS.room === selectRoom);
    await status.availableStatus(roomS.id);

    setCount(availableCount);
    navigate(0);
  };

  const selectRoomHolding = async selectRoom => {
    const roomS = roomSql.find(roomS => roomS.room === selectRoom);
    await status.holdingStatus(roomS.id);
    setCount(availableCount);
    navigate(0);
  };

  const selectRoomUnavailable = async selectRoom => {
    const roomS = roomSql.find(roomS => roomS.room === selectRoom);
    await status.unavailableStatus(roomS.id);
    setCount(availableCount);
    navigate(0);
  };
  const [count, setCount] = useState(0);
  const ava = roomSql.map(el => el.status);
  let availableCount = 0;
  ava.forEach(item => {
    if (item === 'AVAILABLE') {
      availableCount++;
    }
  });

  return (
    <div>
      <div>
        {/* body */}
        <div
          className='bg-bg min-h-screen
'
        >
          <div className='flex justify-between p-14'>
            <div className=' w-[350px] h-[500px]'>
              <AdminSelectFloor
                setRoomFloor={setRoomFloor}
                roomFloor={roomFloor}
                roomSql={roomSql}
                setFloor={setFloor}
                // currentFloor1={currentFloor1}
                // currentFloor2={currentFloor2}
                setCurrentFloor1={setCurrentFloor1}
                setCurrentFloor2={setCurrentFloor2}
              />
            </div>
            <div className=' w-auto '>
              <AdminRoomBox
                floor={floor}
                currentFloor1={currentFloor1}
                currentFloor2={currentFloor2}
                roomFloor={roomFloor}
                roomSql={roomSql}
                // setSelectRoom={setSelectRoom}
                // selectRoom={selectRoom}
              />
            </div>
            <div className=' w-[300px] h-auto'>
              <AdminRoomHolding floor={floor} />
              <br />
              <div className='flex-1 grid justify-items-center space-y-5 '>
                {/* <Link to='/payment'> */}
                <button
                  onClick={() => selectRoomAvailable(selectRoom)}
                  className='font-Oswald font-extrabold rounded-xl h-[40px] w-[250px] bg-lig2 text-white text-[24px] flex items-center justify-center hover:opacity-60'
                >
                  STATUS AVAILABLE
                </button>
                <button
                  onClick={() => selectRoomHolding(selectRoom)}
                  className='font-Oswald font-extrabold rounded-xl h-[40px] w-[250px] bg-gold text-white text-[24px] flex items-center justify-center hover:opacity-60'
                >
                  STATUS HOLDING
                </button>
                <button
                  onClick={() => selectRoomUnavailable(selectRoom)}
                  className='font-Oswald font-extrabold rounded-xl h-[40px] w-[250px] bg-red text-white text-[24px] flex items-center justify-center hover:opacity-60'
                >
                  STATUS UNAVAILABLE
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
