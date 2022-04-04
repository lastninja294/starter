import React from 'react';
import './index.scss';

import Container from './components/container';
import {posts} from './components/facedata';

import Create from './components/create/create';



const News = () => {
  return (
    <>
      <Create/>
      {/* posts cardlari */}
      <Container posts={posts} />
    </>
  );
};

export default News;
