import { useContext } from 'react';
import { RoomContext } from '../context/RoomContextProvider';

export default function useAuth() {
  return useContext(RoomContext);
}

// is the function for using auth context
