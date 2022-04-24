import axios from 'axios';
import {useMutation} from 'react-query';

export default function useDeleteData(name, url) {
  const {mutateAsync, isLoading, isSuccess, isError} = useMutation(
    name,
    async () => {
      const response = await axios.delete(url);
      return response.data;
    },
  );
  return {mutateAsync, isLoading, isSuccess, isError};
}
