import useRoom from '../../hooks/useRoom';

export default function DropdownChange({ open }) {
  const { roomSql, floor, setSelectRoom } = useRoom();
  const changeRoom = roomSql.filter(
    room => room.status === 'AVAILABLE' && +room.floor === +floor
  );

  const handleClickSelectRoom = room => {
    setSelectRoom(room);
    // console.log(selectRoom);
  };

  return (
    <>
      <div
        className={`relative flex-col bg-stone-600 left-[15px] ${
          open ? '' : 'hidden'
        }`}
      >
        <div>
          <div className='absolute'>
            {changeRoom.map(el => (
              <div key={el.room}>
                <button
                  key={el.room}
                  onClick={() => handleClickSelectRoom(el.room)}
                >
                  {el.room}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
