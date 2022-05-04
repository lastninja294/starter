import React from 'react';
import {posts} from './components/facedata';

import Create from './components/create/create';
import NewsTable from './components/table/table';
import AppPageMetadata from '@crema/core/AppPageMetadata';

import {getAllNews} from 'hooks';
import {useHistory} from 'react-router-dom';
import Error404 from 'pages/errorPages/Error404';

const NewsPage = () => {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const page = params.get('page');
  const size = params.get('size');
  const {isLoading, data, isError, refetch , error } = getAllNews({page, size});
  console.log(data);
  console.log(error);
  console.log(error?.request?.status);
  // const [news , setNews] = useState([])

  // useEffect(()=>{
  //   setNews(data?.data)
  // },[data])
  if (isError) return <Error404 />;

  return (
    <AppPageMetadata title='News'>
      <Create refetch={refetch} />
      <NewsTable
        posts={posts}
        dataCount={data?.data?.count}
        isLoading={isLoading}
        refetch={refetch}
      />
    </AppPageMetadata>
  );
};

export default NewsPage;
