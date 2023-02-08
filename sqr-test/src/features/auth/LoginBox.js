import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

export default function LoginBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  // const [error, setError] = useState({});
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password); // => auth.context => auth-api
      toast.success('Success login');
      // catch error when login fail and show error
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.Message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className={'h-[400px]'}>
        <div>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>Email</h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              E
            </div>
            <input
              type={'text'}
              placeholder=' Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {/* {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.email}
            </small>
          )} */}
        </div>

        <div>
          <h1 className='mb-3 ml-3 font-Oswald font-bold text-[20px]'>
            Password
          </h1>
          <div className='flex'>
            <div className='bg-red border-4 border-zinc-900 h-[30px] w-[30px] text-center'>
              {' '}
              P
            </div>
            <input
              type={'password'}
              placeholder=' Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {/* {error && (
            <small className='ml-6 font-Oswald font-bold text-red '>
              {error.password}
            </small>
          )} */}
        </div>

        <div className='mt-12 ml-5 '>
          <button
            className='font-Oswald font-extrabold rounded-full h-[40px] w-[125px] bg-white text-[24px]'
            type='submit'
          >
            {' '}
            Login
          </button>
        </div>
      </form>
    </>
  );
}
