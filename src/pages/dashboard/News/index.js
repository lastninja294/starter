import React from 'react';
import './index.scss';

import Container from './components/container';
import {posts} from './components/facedata';

import Create from './components/create/create';
import {useSelector} from 'react-redux';

const News = () => {
  const searchText = useSelector((state) => state.news.serachPost);
  const searchPosts = posts.filter((post) => post.title.includes(searchText));
  return (
    <>
      <Create />
      {/* posts cardlari */}
      <Container posts={searchPosts} />
    </>
  );
};

export default News;
