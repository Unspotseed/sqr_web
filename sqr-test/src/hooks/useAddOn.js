import { useContext } from 'react';
import { AddOnContext } from '../context/PaymentContextProvider';

export default function useAddOn() {
  return useContext(AddOnContext);
}
