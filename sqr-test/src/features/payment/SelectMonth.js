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
        className={`relative  bg-stone-600 top-[20px]  ${opem ? '' : 'hidden'}`}
      >
        <div>
          <div className='absolute flex text-xl '>
            {month.map(el => (
              <div key={el}>
                <div
                  className='bg-yellow-500 mr-2 w-5 hover:opacity-60'
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
