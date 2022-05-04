import {useMutation, useQuery, useQueryClient} from 'react-query';
import {APIURL} from './APIURL';
// import {request} from './APIURL';
export const getAllData = async () => {
  const response = await APIURL.get('/staff');
  return response.data;
};

export const getOneData = async (id) => {
  const response = await APIURL.get(`staff/${id}`);
  return response.data;
};

export const deleteData = async (id) => {
  const response = await APIURL.delete(`staff/${id}`);
  return response.data;
};

export const createData = async (data) => {
  const response = await APIURL.post('staff/', data);
  return response.data;
};

export const updateData = async (data) => {
  const response = await APIURL.put(`staff/${data.id}`, data);
  return response.data;
};

export const useGetData = () => {
  return useQuery('staff', getAllData);
};

export const useCreateData = () => {
  const queryClient = useQueryClient();

  return useMutation(createData, {
    onMutate: async (newData) => {
      await queryClient.cancelQueries('staff');
      const previousData = queryClient.getQueriesData('staff');
      queryClient.setQueryData('staff', (oldQueryData) => {
        return [
          ...oldQueryData,
          {id: oldQueryData[oldQueryData.length - 1].id + 1, ...newData},
        ];
      });
      return {previousData};
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('staff', context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('staff');
    },
  });
};
//{id: oldQueryData?.data?.length + 1, ...newData}
export const useUpdateData = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => updateData(data), {
    onMutate: async (userUpdates) => {
      console.log('user:', userUpdates);
      await queryClient.cancelQueries(['staff', userUpdates.id]);
      const previousUser = queryClient.getQueryData(['staff', userUpdates.id]);
      console.log('prev:', previousUser);
      queryClient.setQueryData('staff', (oldData) => {
        const staffs = oldData.map((item) =>
          item.id == userUpdates.id ? {...userUpdates} : item,
        );
        return staffs;
      });
      // queryClient.setQueryData(['staff', {id: userUpdates.id}], userUpdates);
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
    // onMutate: async (id) => {
    //   await queryClient.cancelQueries('staff');
    //   const previousData = queryClient.getQueriesData('staff');
    //   queryClient.setQueryData('staff', (oldQueryData) => {
    //     console.log('old:', oldQueryData);
    //     return [oldQueryData.filter((item) => item.id !== id)];
    //   });
    //   return {previousData};
    // },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('staff', context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('staff');
    },
  });
};
