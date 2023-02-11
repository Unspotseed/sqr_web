export default function RoomBox() {
  return (
    <>
      <div>
        <div className='bg-orange-300 h-20 '>
          <h1>{`1 st Floor`}</h1>
        </div>
        <div className='bg-green w-[600px] mt-10'>
          <div className='bg-pink-700 flex h-[100px]'>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center items-center'>
              <button>401</button>
              <small>status</small>
            </div>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
          </div>
          <div className='bg-neutral-600 h-[100px]'> WALKING SPACE</div>
          <div className='bg-yellow-700  flex h-[100px]'>
            {' '}
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
            <div className='bg-orange-600 flex-1 border-4 border-slate-900 grid justify-items-center'>
              <h1>401</h1>
              <small>status</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
