import { getDataApi } from '@crema/utility/APIHooks';
import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import { fetchStart, fetchError , fetchSuccess } from 'redux/actions/News';
import { useDispatch } from 'react-redux';
const Certificates = () => {
  const infoViewContext = {fetchStart  , fetchError , fetchSuccess};
  const data = getDataApi(
    'https://fakestoreapi.com/products',
    infoViewContext,
    true
  )
  console.log(data);
  const dispatch =  useDispatch()
  dispatch(fetchStart());
  return (
    <>
      <AppPageMetadata title='Certificates' />
      <h2>Certificates Page</h2>
      <p>You can kick start your app</p>
    </>
  );
};

export default Certificates;
