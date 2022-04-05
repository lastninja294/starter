import React from 'react';
import MyCard from './card';
import PropTypes from 'prop-types';

import './styles/container.scss';
const Container = ({posts}) => {
  return (
    <div className='card_container'>
      {posts?.map((post) => (
        <MyCard key={post?.id} post={post} />
      ))}
    </div>
  );
};

export default Container;

Container.propTypes = {
  posts: PropTypes.array,
};
