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
          className='flex bg-blue2 w-[760px] h-auto  '
        >
          <div className=' grow'>
            <div className='flex   '>
              <h1 className='ml-28   border-b-4 pb-2 font-Oswald font-bold text-[40px]  text-white mt-4'>
                {title}
              </h1>
            </div>

            <div className=' mt-8 ml-8'>{children}</div>
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
