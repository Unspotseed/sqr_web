import useRoom from '../../hooks/useRoom';

export default function RoomAvailable({ floor }) {
  const { roomSql, selectRoom, setSelectRoom } = useRoom();
  const roomAvailable = roomSql.filter(
    // room => room.status === 'AVAILABLE' && +room.floor === +floor
    room => +room.floor === +floor && room.status === 'AVAILABLE'
  );

  const handleClickSelectRoom = room => {
    setSelectRoom(room);
    // console.log(selectRoom);
  };

  return (
    <>
      <div>
        <div className=' h-[80px]'>
          <h1 className='text-4xl font-semibold text-white font-Oswald'>
            Room available
          </h1>
        </div>
        <div className=' mt-10'>
          <h2 className='text-3xl font-semibold text-white'>
            {' '}
            {floor} th Floor
          </h2>
        </div>
        <div className=' mt-10'>
          {roomAvailable.map(el => (
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
