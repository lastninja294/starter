import axios from 'axios';
import {useQuery} from 'react-query';

export default function useGetData(url) {
  const {data, status, error, isFetching, refetch} = useQuery(url, async () => {
    const response = await axios.get(url);
    return response.data;
  });
  return {data, status, error, isFetching, refetch};
}
