import { createContext, useEffect, useState } from 'react';

import * as addOnApi from '../apis/addOn-api';

export const AddOnContext = createContext();

export default function AddOnContextProvider({ children }) {
  const [addOnSql, setAddOnSql] = useState([]);
  const [addOnShow, setAddOnShow] = useState([]);

  useEffect(() => {
    const showAddOn = async () => {
      const res = await addOnApi.getAddOn();
      // console.log(res.data.addOn);
      setAddOnSql(res.data.addOn);
    };
    showAddOn();
  }, []);
  return (
    <AddOnContext.Provider value={{ addOnSql, addOnShow, setAddOnShow }}>
      {children}
    </AddOnContext.Provider>
  );
}
