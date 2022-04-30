import {useMutation, useQueryClient} from 'react-query';
import {APIURL} from './APIURL';
export const getAllData = async () => {
  const response = await APIURL.get('staff/');
  return response.data;
};

export const getOneData = async (id) => {
  const response = await APIURL.get(`staff/${id}`);
  return response.data;
};

export const deleteData = async (id) => {
  await APIURL.delete(`staff/${id}`).then((response) => response.data);
};

export const createData = (data) => {
  return APIURL.post('staff/', data);
};

export const updateData = async ({id, ...data}) => {
  await APIURL.patch(`staff/${id}`, data).then((response) => response.data);
};

export const useCreateData = () => {
  const queryClient = useQueryClient();

  return useMutation(createData, {
    onSuccess: () => {
      queryClient.invalidateQueries('staff');
    },
  });
};

export const useUpdateData = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => updateData(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['staff']);
    },
  });
};

export const useDeleteData = () => {
  const queryClient = useQueryClient();

  return useMutation((id) => deleteData(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['staff']);
    },
  });
};
