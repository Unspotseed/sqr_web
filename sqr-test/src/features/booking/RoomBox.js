import useRoom from '../../hooks/useRoom';

export default function RoomBox({ floor, currentFloor1, currentFloor2 }) {
  const { setSelectRoom } = useRoom();

  const handleClickSelectRoom = room => {
    setSelectRoom(room);
  };
  return (
    <>
      <div>
        <div className='bg-orange-300 h-20 '>
          <h1>{`${floor} st Floor`}</h1>
        </div>
        <div className='bg-green w-[600px] mt-10'>
          <div className='bg-pink-700 flex h-[100px]'>
            {currentFloor1.map(el => (
              <div
                key={el.room}
                onClick={() =>
                  el.status === 'AVAILABLE'
                    ? handleClickSelectRoom(el.room)
                    : ''
                }
                className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center items-center'
              >
                <button>{el.room}</button>
                <small>{el.status}</small>
              </div>
            ))}
          </div>
          <div className='bg-neutral-600 h-[100px]'> WALKING SPACE</div>
          <div className='bg-yellow-700  flex h-[100px]'>
            {' '}
            {currentFloor2.map(el => (
              <div
                key={el.room}
                onClick={() =>
                  el.status === 'AVAILABLE'
                    ? handleClickSelectRoom(el.room)
                    : ''
                }
                className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center items-center'
              >
                <button>{el.room}</button>
                <small>{el.status}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
