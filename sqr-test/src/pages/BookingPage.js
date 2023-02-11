import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import RoomAvailable from '../features/booking/RoomAvailable';
import RoomBox from '../features/booking/RoomBox';
import SelectFloor from '../features/booking/SelectFloor';
// import * as bookingApi from '../apis/booking-api';
import useRoom from '../hooks/useRoom';

export default function BookingPage() {
  // const [floor, setFloor] = useState('');
  const {
    roomSql,
    selectRoom,
    floor,
    setFloor,
    //  setSelectRoom
  } = useRoom();

  // const []

  const navigate = useNavigate();

  const [roomFloor, setRoomFloor] = useState([]);

  const [currentFloor1, setCurrentFloor1] = useState([]);
  const [currentFloor2, setCurrentFloor2] = useState([]);
  // console.log(floor, 'jjijiujus');
  // console.log(currentFloor);
  // console.log(currentFloor1);
  // console.log(currentFloor2);
  // const floorSth = roomSql.filter(room => room.floor === floor);
  // const floor2 = roomSql.filter(room => room.floor === 2);
  // const floor3 = roomSql.filter(room => room.floor === 3);
  // const floor4 = roomSql.filter(room => room.floor === 4);
  // const floor5 = roomSql.filter(room => room.floor === 5);

  // const floor1Status = floor1.filter(
  //   room => room.status === 'AVAILABLE'
  // ).length;
  // const floor2Status = floor2.filter(
  //   room => room.status === 'AVAILABLE'
  // ).length;
  // const floor3Status = floor3.filter(
  //   room => room.status === 'AVAILABLE'
  // ).length;
  // const floor4Status = floor4.filter(
  //   room => room.status === 'AVAILABLE'
  // ).length;
  // const floor5Status = floor5.filter(
  //   room => room.status === 'AVAILABLE'
  // ).length;

  /*
  const [roomSql, setRoomSql] = useState([]);
  useEffect(() => {
    const showRooms = async () => {
      const res = await bookingApi.getRoom();
      console.log(res.data.rooms);
      setRoomSql(res.data.rooms);
    };
    showRooms();
  }, []);
*/

  const selectRoomClick = selectRoom => {
    console.log(selectRoom);
    if (selectRoom && selectRoom.length !== 0) {
      return navigate('/payment');
    }
    return;
  };

  return (
    <div>
      <div>
        {/* body */}
        <div
          className='bg-bg h-screen
'
        >
          <div className='flex justify-between p-14'>
            <div className='bg-red w-[350px] h-[500px]'>
              <SelectFloor
                setRoomFloor={setRoomFloor}
                roomFloor={roomFloor}
                roomSql={roomSql}
                setFloor={setFloor}
                setCurrentFloor1={setCurrentFloor1}
                setCurrentFloor2={setCurrentFloor2}
              />
            </div>
            <div className='bg-blue w-auto '>
              <RoomBox
                floor={floor}
                currentFloor1={currentFloor1}
                currentFloor2={currentFloor2}
                // setSelectRoom={setSelectRoom}
                // selectRoom={selectRoom}
              />
            </div>
            <div className='bg-cyan-800 w-[300px] h-auto'>
              <RoomAvailable floor={floor} />
              <br />
              <div className='flex-1 grid justify-items-center bg-red'>
                {/* <Link to='/payment'> */}
                <button
                  onClick={() => selectRoomClick(selectRoom)}
                  className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
                >
                  Confirm Room
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
