import useRoom from '../hooks/useRoom';

export default function Bill() {
  const { selectRoom } = useRoom();
  return (
    <>
      <div className='bg-stone-700'>
        <div className='flex justify-between mb-10'>
          <h1>Room : {selectRoom}</h1>
          <div>
            <h3>Change</h3>
          </div>
        </div>
        <div className='my-5'>Price :</div>
        <div className='bg-emerald-900 my-3'>
          <div className='bg-stone-300 my-3'>Month</div>
          <div className='bg-yellow-700 flex justify-between'>
            <h1>3</h1> <h1>THB 9000</h1>
          </div>
          <div className='bg-stone-300 my-3'>Add-on</div>
          <div className='bg-yellow-700 flex justify-between'>
            <h1>Fans</h1> <h1>THB 600</h1>
          </div>
          <div className='bg-stone-300 flex justify-between w-11/12 my-3'>
            <h1>Total Price</h1>
            <h1>THB 9600</h1>
          </div>
        </div>
      </div>
    </>
  );
}
