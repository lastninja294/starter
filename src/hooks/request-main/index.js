import axios from 'axios';

// const getToken = () => {
//   return window.localStorage.getItem('user-token');
// };

const MainRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  // headers: {
  //   Authorization: `Bearer ${getToken()}`,
  // },
});

MainRequest.interceptors.request.use(
  (config) => config,
  (error) => {
    if (error?.response?.status === 401) {
      console.warn(error, '401');
    }
    throw error;
  },
);

export default MainRequest;
