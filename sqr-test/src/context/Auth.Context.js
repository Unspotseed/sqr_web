import { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={''}>{children}</AuthContext.Provider>;
}

// การส่งค่าไปใน context object value={}
//context object ไว้เเก้ปัญหา props drilling

// เอาไปครอป อะไรก็ตามที่จะเอาค่าไปใช้
// พอเอาไปครอปใน app ทุกตัวข้างในเลยจะใช้ได้
