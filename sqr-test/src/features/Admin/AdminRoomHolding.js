import useRoom from '../../hooks/useRoom';
import { useState } from 'react';
import AdminSelect from './AdminSelect';
export default function AdminRoomHolding({ floor }) {
  const { roomSql, selectRoom, setSelectRoom } = useRoom();
  const [option, setOption] = useState([]);
  const [open, setOpen] = useState(false);
  const roomStatus = roomSql.filter(
    room => +room.floor === +floor && room.status === option
  );

  const handleClickSelectRoom = room => {
    setSelectRoom(room);

    // console.log(selectRoom);
  };

  return (
    <>
      <div>
        <div className=' h-[80px]'>
          <button
            onClick={() => setOpen(!open)}
            className='text-4xl font-semibold text-white font-Oswald'
          >
            Room {option}
          </button>
          <AdminSelect open={open} setOption={setOption} setOpen={setOpen} />
        </div>
        <div className=' mt-10'>
          <h2 className='text-3xl font-semibold text-white'>
            {' '}
            {floor} th Floor
          </h2>
        </div>
        <div className=' mt-10'>
          {roomStatus.map(el => (
            <div key={el.room} className='flex justify-center'>
              <h1
                key={el.room}
                className={
                  'text-white font-semibold font-Oswald text-[18px] hover:opacity-60'
                }
                onClick={() => handleClickSelectRoom(el.room)}
              >
                Room {el.room}
              </h1>
            </div>
          ))}
        </div>
        <div className='mt-16 '>
          <h1 className='font-Oswald text-white text-2xl font-semibold mb-10'>
            {' '}
            Select Room : {selectRoom}
          </h1>
        </div>
      </div>
    </>
  );
}
