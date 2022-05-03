import {useMutation, useQuery, useQueryClient} from 'react-query';
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

export const createData = async (data) => {
  const response = await APIURL.post('staff/', data);
  return response.data;
};

export const updateData = async (data) => {
  await APIURL.put(`staff/${data.id}`, data).then((response) => response.data);
};

export const useGetData = () => {
  return useQuery('staff', getAllData);
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
    onMutate: async (userUpdates) => {
      await queryClient.cancelQueries(['staff', userUpdates.id]);
      const previousUser = queryClient.getQueryData(['staff', userUpdates.id]);
      queryClient.setQueryData(['staff', userUpdates.id], userUpdates);
      return {previousUser, userUpdates};
    },

    onError: (err, userUpdates, context) => {
      queryClient.setQueryData(
        ['staff', context.userUpdates.id],
        context.previousUser,
      );
    },

    onSettled: () => {
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
