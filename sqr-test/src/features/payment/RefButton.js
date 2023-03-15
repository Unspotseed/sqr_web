import BookingRefForm from './BookingRefForm';
import Modal from '../../components/Modal';
import { useState } from 'react';
export default function RefButton({ bookingId }) {
  const [open, setOpen] = useState(false);
  return (
    <div className='font-Oswald font-semibold'>
      <button
        onClick={() => setOpen(true)}
        className='w-16 bg-gold rounded hover:opacity-60
      '
      >
        ref
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={'Booking Ref'}
        bookingId={bookingId}
      >
        <BookingRefForm onClose={() => setOpen(false)} bookingId={bookingId} />
      </Modal>
    </div>
  );
}
