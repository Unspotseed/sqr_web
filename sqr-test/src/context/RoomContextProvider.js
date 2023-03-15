import { createContext, useEffect, useState } from 'react';
import * as bookingApi from '../apis/booking-api';

export const RoomContext = createContext();

export default function RoomContextProvider({ children }) {
  const [roomSql, setRoomSql] = useState([]);

  const showRooms = async () => {
    const res = await bookingApi.getRoom();
    // console.log(res.data.rooms);
    setRoomSql(res.data.rooms);
  };
  useEffect(() => {
    showRooms();
  }, []);

  const [selectRoom, setSelectRoom] = useState([]);
  const [floor, setFloor] = useState('');
  const [roomPrice, setRoomPrice] = useState([]);
  const [selectRoomId, setSelectRoomId] = useState([]);
  return (
    <RoomContext.Provider
      value={{
        roomSql,
        selectRoom,
        setSelectRoom,
        floor,
        setFloor,
        setRoomPrice,
        roomPrice,
        selectRoomId,
        setSelectRoomId,
        showRooms,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
