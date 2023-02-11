import { createContext, useEffect, useState } from 'react';
import * as bookingApi from '../apis/booking-api';

export const RoomContext = createContext();

export default function RoomContextProvider({ children }) {
  const [roomSql, setRoomSql] = useState([]);

  useEffect(() => {
    const showRooms = async () => {
      const res = await bookingApi.getRoom();
      console.log(res.data.rooms);
      setRoomSql(res.data.rooms);
    };
    showRooms();
  }, []);

  const [selectRoom, setSelectRoom] = useState([]);
  const [floor, setFloor] = useState('');

  return (
    <RoomContext.Provider
      value={{ roomSql, selectRoom, setSelectRoom, floor, setFloor }}
    >
      {children}
    </RoomContext.Provider>
  );
}
