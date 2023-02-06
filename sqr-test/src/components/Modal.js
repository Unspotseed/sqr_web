export default function Modal({ open, onClose, children, title }) {
  return (
    <>
      {' '}
      <div
        onMouseDown={onClose}
        className={` ${
          open ? '' : 'hidden'
        } flex fixed top-0 inset-0  backdrop-blur-sm  justify-center items-center rounded`}
      >
        <div
          onMouseDown={e => e.stopPropagation()}
          className='flex bg-sky-700 w-[760px] h-auto  '
        >
          <div className='bg-green grow'>
            <div className='flex bg-red  '>
              <h1 className='ml-28  bg-green border-b-2 font-Oswald font-bold text-[40px]'>
                {title}
              </h1>
            </div>

            <div className='bg-orange-300 mt-8 ml-8'>{children}</div>
          </div>

          <div className='bg-white grow-1 w-[260px] block '>
            <img
              src='https://images.pexels.com/photos/1671051/pexels-photo-1671051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              className='h-full'
              alt='apartment'
            />
          </div>
        </div>
      </div>
    </>
  );
}
