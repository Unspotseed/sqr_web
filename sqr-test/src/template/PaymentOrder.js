export default function PaymentOrder({ floor }) {
  return (
    <>
      <div>
        <div>
          <div className='bg-yellow-400 h-[50px] border-b-4'>
            <h1>PaymentOrder</h1>
          </div>
          <h1> #0001</h1>
        </div>
        <div className='bg-teal-800 my-10'>
          <h1>The Mont tower</h1>
          <div className='bg-lime-200'>
            <h1>{floor} th Floor</h1>
          </div>
        </div>

        <div>
          <div>Add-on</div>
          <div className='bg-purple-400'>
            <div className='flex justify-between'>
              <h1>Air conditioner</h1> <h1>200+</h1>
            </div>
            <div className='flex justify-between'>
              <h1>Air conditioner</h1> <h1>200+</h1>
            </div>
            <div className='flex justify-between'>
              <h1>Air conditioner</h1> <h1>200+</h1>
            </div>
            <div className='flex justify-between'>
              <h1>Air conditioner</h1> <h1>200+</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
