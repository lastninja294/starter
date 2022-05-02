import axios from 'axios';
import {useQuery} from 'react-query';

export default function useGetData(name, url) {
  const {data, status, error, isFetching} = useQuery(name, async () => {
    const response = await axios.get(url);
    return response.data;
  });
  return {data, status, error, isFetching};
}
