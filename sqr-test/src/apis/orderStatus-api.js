import axios from '../config/axios';

export const getOrder = () => axios.get('/orderStatus');
export const getAllOrder = () => axios.get('/orderStatus/admin');
export const cancelBooking = bookingId =>
  axios.delete(`/orderStatus/${bookingId}`);
export const createOrderSubmitForm = input => axios.post('/orderStatus', input);
export const availableStatus = status =>
  axios.patch(`/orderStatus/available/${status}`);
export const holdingStatus = status =>
  axios.patch(`/orderStatus/holding/${status}`);
export const unavailableStatus = status =>
  axios.patch(`/orderStatus/unavailable/${status}`);

export const adminConfirm = status =>
  axios.patch(`/orderStatus/orderAdminSuccess/${status}`);
export const adminFail = status =>
  axios.patch(`/orderStatus/orderAdminFail/${status}`);
