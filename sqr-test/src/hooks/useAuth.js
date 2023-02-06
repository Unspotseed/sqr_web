import { useContext } from 'react';
import { AuthContext } from '../context/Auth.Context';

export default function useAuth() {
  return useContext(AuthContext);
}

// is the function for using auth context
