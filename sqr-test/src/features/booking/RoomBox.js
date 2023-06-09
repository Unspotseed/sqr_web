import useRoom from '../../hooks/useRoom';

export default function RoomBox({ floor, currentFloor1, currentFloor2 }) {
  const { setSelectRoom } = useRoom();

  const handleClickSelectRoom = room => {
    setSelectRoom(room);
  };
  return (
    <>
      <div>
        <div className=' h-20 '>
          <h1 className='text-4xl font-semibold text-white'>{`${floor} th Floor`}</h1>
        </div>
        <div className=' w-[600px] mt-10'>
          <div className=' flex h-[100px]'>
            {currentFloor1.map(el => (
              <div
                key={el.room}
                onClick={() =>
                  el.status === 'AVAILABLE'
                    ? handleClickSelectRoom(el.room)
                    : ''
                }
                className='bg-green3 flex-1 border-4 border-slate-900 grid justify-items-center items-center hover:opacity-60'
              >
                <button className='text-white text-2xl font-semibold'>
                  {el.room}
                </button>
                <small
                  className={`text-white font-semibold ${
                    el.status === 'HOLDING'
                      ? 'bg-gold border-gold'
                      : el.status === 'UNAVAILABLE'
                      ? 'bg-red border-red'
                      : 'bg-green2 border-green2'
                  } border-2 rounded-full px-2  `}
                >
                  {el.status}
                </small>
              </div>
            ))}
          </div>
          <div className=' h-[100px] flex justify-center items-center text-4xl font-semibold text-white'>
            {' '}
            WALKING SPACE
          </div>
          <div className='  flex h-[100px]'>
            {' '}
            {currentFloor2.map(el => (
              <div
                key={el.room}
                onClick={() =>
                  el.status === 'AVAILABLE'
                    ? handleClickSelectRoom(el.room)
                    : ''
                }
                className='bg-green3 flex-1 border-4 border-slate-900 grid justify-items-center items-center hover:opacity-0'
              >
                <button className='text-white text-2xl font-semibold'>
                  {el.room}
                </button>
                <small
                  className={`text-white font-semibold ${
                    el.status === 'HOLDING'
                      ? 'bg-gold border-gold'
                      : el.status === 'UNAVAILABLE'
                      ? 'bg-red border-red'
                      : 'bg-green2 border-green2'
                  } border-2 rounded-full px-2  `}
                >
                  {el.status}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
