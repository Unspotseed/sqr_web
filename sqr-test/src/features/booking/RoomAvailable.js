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
        <div className='bg-pink-900 h-[80px]'>
          <h1>Room available</h1>
        </div>
        <div className='bg-amber-700 mt-10'>
          <h2> {floor} th Floor</h2>
        </div>
        <div className='bg-lime-800 mt-10'>
          {roomAvailable.map(el => (
            <div key={el.room}>
              <button
                key={el.room}
                onClick={() => handleClickSelectRoom(el.room)}
              >
                {el.room} Room
              </button>
            </div>
          ))}
        </div>
        <div className='mt-10 bg-teal-300'>
          <h1> Select Room : {selectRoom}</h1>
        </div>
      </div>
    </>
  );
}
