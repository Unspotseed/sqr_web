import LoginBox from '../features/auth/LoginBox';
import RegisterBox from '../features/auth/RegisterBox';

export default function Apartment() {
  return (
    <div>
      <div>Apartment page</div>
      <LoginBox />
      <RegisterBox />
    </div>
  );
}
