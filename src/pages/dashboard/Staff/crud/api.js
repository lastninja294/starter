import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://axiosuchunsinovapi.herokuapp.com/staff',
});
