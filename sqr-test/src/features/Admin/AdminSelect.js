export default function AdminSelect({ setOption, open, setOpen }) {
  const roomSel = ['AVAILABLE', 'HOLDING', 'UNAVAILABLE'];
  const handleClickSelectMonth = opt => {
    setOption(opt);
    setOpen(false);
  };
  return (
    <>
      <div className={`relative   top-[30px]  ${open ? '' : 'hidden'}`}>
        <div className=''>
          <div className='absolute bg-bg flex flex-col text-xl font-Oswald font-semibold space-y-3 '>
            {roomSel.map(el => (
              <div key={el}>
                <div
                  className='bg-white mr-2  hover:opacity-60'
                  onClick={() => handleClickSelectMonth(el)}
                >
                  {el}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
