import { createContext, useEffect, useState } from 'react';

import * as paymentApi from '../apis/payment-api';

export const AddOnContext = createContext();

export default function AddOnContextProvider({ children }) {
  const [addOnSql, setAddOnSql] = useState([]);
  const [addOnShow, setAddOnShow] = useState([]);
  const [selectMonth, setSelectMonth] = useState([]);
  const [totalRoom, setTotalRoom] = useState([]);
  const [totalAddOn, setTotalAddOn] = useState([]);
  const [totalPriceA, setTotalPriceA] = useState([]);

  const [addTheAddOn, setAddTheAddOn] = useState([]);

  useEffect(() => {
    const showAddOn = async () => {
      const res = await paymentApi.getAddOn();
      // console.log(res.data.addOn);
      setAddOnSql(res.data.addOn);
    };
    showAddOn();
  }, []);

  // const bodyPostOrder = {order,month,roomId,totalPrice};

  // const postOrder = async bodyPostOrder => {
  //   const res = await paymentApi.postOrder(bodyPostOrder);
  // };

  const [aaa, setAAA] = useState([]);
  // useEffect(() => {
  //   const adc = async () => {
  //     const res = await paymentApi.postOrder({
  //       order: '123',
  //       month: '3',
  //       roomId: '1',
  //       totalPrice: '3000',
  //       timeStart: '2023-02-14',
  //       timeEnd: '2023-03-14',
  //     });
  //     setAAA(res.data);
  //     console.log(res.data);
  //   };
  //   adc();
  // }, []);
  return (
    <AddOnContext.Provider
      value={{
        addOnSql,
        addOnShow,
        setAddOnShow,
        setSelectMonth,
        selectMonth,
        totalRoom,
        setTotalRoom,
        addTheAddOn,
        setAddTheAddOn,
        setTotalAddOn,
        totalAddOn,
        setTotalPriceA,
        totalPriceA,
        aaa,
        setAAA,
      }}
    >
      {children}
    </AddOnContext.Provider>
  );
}
