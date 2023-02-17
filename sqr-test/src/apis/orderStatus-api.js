import axios from '../config/axios';

export const getOrder = () => axios.get('/orderStatus');
export const cancelBooking = bookingId =>
  axios.delete(`/orderStatus/${bookingId}`);
export const createOrderSubmitForm = input => axios.post('/orderStatus', input);
