import { useContext } from 'react';
import { RoomContext } from '../context/RoomContextProvider';

export default function useRoom() {
  return useContext(RoomContext);
}

// is the function for using auth context
