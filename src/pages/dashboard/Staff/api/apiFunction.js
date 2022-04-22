import {useMutation, useQueryClient} from 'react-query';
import {APIURL} from './APIURL';
export const getAllData = async () => {
  try {
    const response = await APIURL.get('staff/');
    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};

export const getOneData = async ({queryKey}) => {
  const [_key, {id}] = queryKey;
  console.log(_key);
  try {
    const response = await APIURL.get(`staff/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Something Error : getOneData If`);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await APIURL.delete(`staff/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Something Error catchga o'tdi: ${error.message}`);
  }
};

export const createData = (data) => {
  return APIURL.post('staff/', data);
};

export const updateData = ({id, ...data}) => {
  return APIURL.put(`staff/${id}`, data).then((response) => response.data);
};

export const useCreateData = () => {
  const queryClient = useQueryClient();
  return useMutation(createData, {
    onSuccess: () => {
      queryClient.invalidateQueries('staff');
      // queryClient.setQueryData('staff', (oldQueryData) => {
      //   return {
      //     ...oldQueryData,
      //     data: [...oldQueryData.data, data.data],
      //   };
      // });
    },
  });
};
export const useUpdateData = (id) => {
  const queryClient = useQueryClient();

  return useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['staff'], id);
    },
  });
};
