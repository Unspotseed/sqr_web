import { createContext, useEffect, useState, useRef } from 'react';
import * as orderApi from '../apis/orderStatus-api';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [orderSql, setOrderSql] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  // const [inputOrderForm, setInputOrderForm] = useState([]);

  const showOrder = async () => {
    const res = await orderApi.getOrder();
    setOrderSql(res.data.booking);
    // console.log('-------- ', res.data.booking);
    //   console.log(res.data.booking);
  };
  useEffect(() => {
    showOrder();
  }, []);

  //   useEffect(() => {
  //     setOrderInfo(orderSql);
  //   }, [orderSql]);
  // const [file, setFile] = useState([]);
  // const ref = useRef();
  // const openFileInput = () => ref.current.click();
  // const onChangeFileInput = e => {
  //   if (e.target.file[0]) {
  //     setFile(e.target.file[0]);
  //   }
  // };

  // const onCancel = () => {
  //   setFile(null);
  //   ref.current.value = null;
  // };

  return (
    <OrderContext.Provider
      value={{
        orderSql,
        setOrderInfo,
        orderInfo,
        showOrder,
        setOrderSql,
        // file,
        // setFile,
        // ref,
        // openFileInput,
        // onChangeFileInput,
        // onCancel,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
