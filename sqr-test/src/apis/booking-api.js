import axios from '../config/axios';

export const getRoom = () => axios.get('/booking');
