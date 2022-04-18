import React from 'react';
import {posts} from './components/facedata';

import Create from './components/create/create';
import {useSelector} from 'react-redux';
import NewsTable from './components/table/table';

const News = () => {
  const searchText = useSelector((state) => state.news.serachPost);
  const searchPosts = posts.filter((post) => post.title.includes(searchText));
  return (
    <>
      <Create />
      {/* posts cardlari */}
      <NewsTable posts={searchPosts} />
    </>
  );
};

export default News;
