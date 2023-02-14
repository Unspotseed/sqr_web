import useAddOn from '../../hooks/useAddOn';

export default function DropdownMonth({ opem }) {
  const { setSelectMonth } = useAddOn();

  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleClickSelectMonth = month => {
    setSelectMonth(month);
    // console.log(month);
  };
  //   console.log(selectMonth);

  return (
    <>
      <div
        className={`relative  bg-stone-600 top-[20px] right-[120px] ${
          opem ? '' : 'hidden'
        }`}
      >
        <div>
          <div className='absolute flex '>
            {month.map(el => (
              <div key={el}>
                <button
                  className='bg-yellow-500 mr-2 w-5 '
                  onClick={() => handleClickSelectMonth(el)}
                >
                  {el}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
