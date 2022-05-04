import React from 'react';
import {Button, message, Popconfirm} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai';
import {useMutation, useQueryClient} from 'react-query';
import axios from 'axios';

export default function SurgeryDelate({item}) {
  const queryClient = useQueryClient();

  const {mutateAsync} = useMutation(
    async () => {
      const response = await axios.delete(
        `https://axiosuchunsinovapi.herokuapp.com/staff/${item.id}`,
      );
      return response.data;
    },
    {
      onSuccess: () => {
        message.success('success deleted !');

        queryClient.invalidateQueries();
      },
      onError: () => {
        message.error('something wrong !');
      },
    },
  );

  return (
    <Popconfirm
      title='Sure to delete?'
      placement='topRight'
      onConfirm={() => {
        mutateAsync();
      }}>
      <Button type='link' danger style={{padding: 0, margin: '0 1em'}}>
        <AiOutlineDelete style={{fontSize: '1.3em'}} />
      </Button>
    </Popconfirm>
  );
}
