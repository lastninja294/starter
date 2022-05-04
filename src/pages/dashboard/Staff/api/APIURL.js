import axios from 'axios';
export const APIURL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
export const request = ({...options}) => {
  APIURL.defaults.headers.common.Authorization = 'token';
  const onSuccess = (response) => response;
  const onError = (error) => {
    return error;
  };
  return APIURL(options).then(onSuccess).catch(onError);
};
