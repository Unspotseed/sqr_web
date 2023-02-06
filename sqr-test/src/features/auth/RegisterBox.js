import { useState } from 'react';
// import * as Joi from 'joi';
import Input from '../../components/Input';
import validateRegister from '../../validators/validateRegister';

const initialInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

/*
const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }),
  password: Joi.string().alphanum().min(8).required().trim(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim(),
});


const validateRegister = input => {
  // part the input(parameter) from input to validate
  return registerSchema.validate(input, {
    abortEarly: false,
  });

  

  // const { value, error } = registerSchema.validate(input, {
  //   abortEarly: false,
  // }); => put in handle submit form

  // stripUnknown is to remove the unspecified key from object
  // abortEarly คือการ  validate เเล้วถ้าตัวเเรกผิดจะจบการทำงานเลยจะให้ validate  ทุกตัวก่อน เเล้วค่อยว่ากัน

  // const
};
*/

export default function RegisterBox() {
  const [input, setInput] = useState(initialInput);
  // for onchange can keep the input in state
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // clone the state and then select key and get value from value that get from the input that write in the box
  };

  /*
  // version 1
  const handleSubmitForm = e => {
    e.preventDefault();
    // ตอนกด submit form ยกเลิก prevent default ของ form ก่อน
    const { value, error } = validateRegister(input);

    if (error) {
      const newError = error.details.reduce((acc, el) => {
        acc[el.context.label] = el.message;
        return acc;
      }, {});
      // change from array to object // this part is to show the err under the box
      setError(newError);
    }
    console.dir(error);
    // to check where the error is
  };
  */

  const handleSubmitForm = e => {
    e.preventDefault();
    // ตอนกด submit form ยกเลิก prevent default ของ form ก่อน
    const result = validateRegister(input);
    if (result) {
      setError(result);
      // เอา error เดิม มา merge รวมกับ error ใหม่
    } else {
      setError({});
    }
    // console.dir(result);
    // to check where the error is

    // then register to server
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px] '>
            First name
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              F
            </div>
            <Input
              placeholder={'First name'}
              name='firstName'
              value={input.firstName}
              onChange={handleChangeInput}
              error={error.firstName}
            />
          </div>
          {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.firstName}
            </small>
          )}
        </div>

        <div className=''>
          <h1 className=' mb-3 ml-3 font-Oswald font-bold text-[20px]'>
            Last Name
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              L
            </div>
            <Input
              placeholder={'Last name'}
              name='lastName'
              value={input.lastName}
              onChange={handleChangeInput}
              error={error.lastName}
            />
          </div>
          {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.lastName}
            </small>
          )}
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
              name='email'
              value={input.email}
              onChange={handleChangeInput}
              error={error.email}
            />
          </div>
          {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.email}
            </small>
          )}
        </div>

        <div className=''>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
            Password
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              P
            </div>
            <Input
              placeholder={' Password'}
              name='password'
              type={'password'}
              value={input.password}
              onChange={handleChangeInput}
              error={error.password}
            />
          </div>
          {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.password}
            </small>
          )}
        </div>

        <div className=' '>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
            Confirm Password
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              P
            </div>
            <Input
              placeholder={' Confirm Password'}
              type='password'
              name='confirmPassword'
              value={input.confirmPassword}
              onChange={handleChangeInput}
              error={error.confirmPassword}
            />
          </div>
          {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.confirmPassword}
            </small>
          )}
        </div>

        {/* optional */}
        {/* <div className='mt-2 bg-slate-600'>
                <input type={'checkbox'} id='condition' />
                <label
                  className='ml-2 text-[8px] font-Oswald'
                  htmlFor='condition'
                  id='condition'
                >
                  I agree with terms and condition
                </label>
              </div> */}

        <div className='my-5 ml-5 '>
          <button
            className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
            type='submit'
          >
            {' '}
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
