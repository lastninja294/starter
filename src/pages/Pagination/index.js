import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

// import useData from './useData';

const QueryPagination = ({pageName, countPage}) => {
  // Define the history object, because we need to redirect the user to the correct page
  const history = useHistory();

  // define the search query
  const params = new URLSearchParams(history.location.search);

  //  define page and pageSize. If they are not defined, set them to 1 and 10
  const [page, setPage] = useState(params.get('page') || 1);
  const [size, setSize] = useState(params.get('size') || 10);

  // It's easier with useSearchParams but this project is not using it
  useEffect(() => {
    history.push(`/dashboard/${pageName}?page=${page}&size=${size}`);
  }, [page, size]);

  return (
    <>
      <Pagination
        current={+params.get('page') || 1}
        pageSize={+params.get('size') || 10}
        total={countPage ? countPage : 500}
        onChange={(page, size) => {
          setPage(page);
          setSize(size);
        }}
      />
    </>
  );
};

export default QueryPagination;
QueryPagination.propTypes = {
  pageName: PropTypes.string,
  countPage: PropTypes.number,
};
