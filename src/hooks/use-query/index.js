import {useQuery} from 'react-query';

import MainRequest from 'hooks/request-main';

const useMainApi = (url, params, options) => {
  return useQuery([url, params], async ()=>MainRequest.get(url  , {params}), {...options});
};

export default useMainApi;
