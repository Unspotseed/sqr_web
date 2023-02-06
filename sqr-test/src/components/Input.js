export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        className={`${error ? 'border-2 border-rose-600' : ''}`}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
// old version

/* <input
className={`${error ? 'border-2 border-rose-600' : ''}`}
type='text'
placeholder='  First name'
name='firstName'
value={input.firstName}
onChange={handleChangeInput}
/> */
