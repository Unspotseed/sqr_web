import { useContext } from 'react';
import { AddOnContext } from '../context/AddOnContextProvider';

export default function useAddOn() {
  return useContext(AddOnContext);
}
