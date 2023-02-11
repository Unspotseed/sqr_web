import { createContext, useEffect, useState } from 'react';
import * as authApi from '../apis/auth-api';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../utils/local-storage';
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  // const [selectRoom, setSelectRoom] = useState([]);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    fetchAuthUser(); // สามารถเอาค่า user ไปใส่ได้แล้ว
  }, []);

  // set state for do sth to say that u are login
  const login = async (email, password) => {
    // part to login form
    const res = await authApi.login({ email, password }); // sent req of the (email and password) to this
    // res is for to get the login
    // => check in the login box in handleSubmit to catch error
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// การส่งค่าไปใน context object value={}
//context object ไว้เเก้ปัญหา props drilling

// เอาไปครอป อะไรก็ตามที่จะเอาค่าไปใช้
// พอเอาไปครอปใน app ทุกตัวข้างในเลยจะใช้ได้
