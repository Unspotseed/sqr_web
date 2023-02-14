import axios from '../config/axios';

export const getAddOn = () => axios.get('/payment');
export const postOrder = input => axios.post('/payment', input);
