import React from 'react';
import {posts} from './components/facedata';

import Create from './components/create/create';
import {useSelector} from 'react-redux';
import NewsTable from './components/table/table';
import AppPageMetadata from '@crema/core/AppPageMetadata';

const News = () => {
  const searchText = useSelector((state) => state.news.serachPost);
  const searchPosts = posts.filter((post) => post.title.includes(searchText));
  return (
    <>
      <AppPageMetadata title='News'>
        <Create />
        <NewsTable posts={searchPosts} />
      </AppPageMetadata>
    </>
  );
};

export default News;
