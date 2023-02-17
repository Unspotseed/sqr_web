import Input from '../../components/Input';
import { useState, useRef } from 'react';
// import validateRegister from '../../validators/validateRegister';
// import * as authApi from '../../apis/auth-api';
import 'react-toastify/dist/ReactToastify.css';
import useOrder from '../../hooks/useOrder';
// import { toast } from 'react-toastify';
import * as orderStatusApi from '../../apis/orderStatus-api';

const initialInput = {
  paymentName: '',
  paymentLastName: '',
  paymentEmail: '',
  paymentRef: '',
};

export default function BookingRefForm({ onClose, bookingId }) {
  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null);
  const inputEl = useRef();
  console.log(input);
  // console.log(file);

  //   const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('paymentName', input.paymentName);
    formData.append('paymentLastName', input.paymentLastName);
    formData.append('paymentEmail', input.paymentEmail);
    formData.append('paymentRef', input.paymentRef);
    formData.append('bookingId', bookingId);
    formData.append('image', file);

    console.log(formData);
    await orderStatusApi.createOrderSubmitForm(formData);
    onClose();
  };
  /*
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        // setError(result);
      } else {
        // setError({});
        await authApi.register(input); // is async function
        setInput(initialInput);
        onClose();
        toast.success('Success register');
      }
    } catch (err) {
      //   toast.error(err.response?.data.Message);
    }
  };
*/
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px] '>
            Payment Name
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              P
            </div>
            <Input
              placeholder={'Payment Name'}
              name='paymentName'
              value={input.paymentName}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className=''>
          <h1 className=' mb-3 ml-3 font-Oswald font-bold text-[20px]'>
            Payment Last Name
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              P
            </div>
            <Input
              placeholder={'Payment Last Name'}
              name='paymentLastName'
              value={input.paymentLastName}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className=' '>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>Email</h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              E
            </div>
            <Input
              placeholder={' Email'}
              name='paymentEmail'
              value={input.paymentEmail}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className=''>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
            paymentRef
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              P
            </div>
            <Input
              placeholder={' paymentRef'}
              name='paymentRef'
              value={input.paymentRef}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className=' '>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>image</h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              I
            </div>
            <input
              placeholder={' Confirm Password'}
              type='file'
              name='image'
              ref={inputEl}
              onChange={e => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              //   value={input.image}
            />
          </div>
        </div>

        <div className='my-5 ml-5 '>
          <button
            className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
            type='submit'
          >
            {' '}
            Confirm REF
          </button>
        </div>
      </form>
    </>
  );
}
