import axios from 'axios';
export const APIURL = axios.create({
  baseURL: 'https://axiosuchunsinovapi.herokuapp.com/',
});
