import React from 'react';
import PropTypes from 'prop-types';
import draftToHtml from 'draftjs-to-html';
import {Card} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

// my styles for card comonent
import './styles/card.scss';

import EditPost from './edit_post/edit_post';
import PostDescription from './post_description/post_description';
const {Meta} = Card;

const MyCard = ({post}) => {
  // baackenddan kelga post descriptionni handle qilib olish
  const Html = () => {
    // newsDataId.post_description JSON.parsga beriladi
    const postHtml = JSON.parse(post?.description);
    const html = draftToHtml(postHtml);

    return {__html: html};
  };
  ///  date bilan ishlash
  const datePost = new Date(post.date);
  // get month function
  const month = (index) => {
    switch (index) {
      case 0: {
        return 'Yanvar';
      }
      case 1: {
        return 'Fevral';
      }
      case 2: {
        return 'Mart';
      }
      case 3: {
        return 'Aprel';
      }
      case 4: {
        return 'May';
      }
      case 5: {
        return 'Iyun';
      }
      case 6: {
        return 'Iyul';
      }
      case 7: {
        return 'Avgust';
      }
      case 8: {
        return 'Sentabr';
      }
      case 9: {
        return 'Oktabr';
      }
      case 10: {
        return 'Noyabr';
      }
      case 11: {
        return 'Dekabr';
      }

      default:
        break;
    }
  };

  return (
    <>
      <Card
        cover={<PostDescription post={post} />}
        bordered={true}
        actions={[
          <DeleteOutlined key={'delete'} style={{color: '#f00'}} />,
          <EditPost key={post.id} post={post} />,
        ]}>
        <Meta
          title={post?.title}
          description={
            <>
              <p style={{textAlign: 'right'}}>
                {' '}
                {month(datePost.getMonth()) +
                  ' ' +
                  datePost.getDay() +
                  ' ' +
                  datePost.getFullYear()}{' '}
              </p>
              <div className='descrip_value' dangerouslySetInnerHTML={Html()} />
            </>
          }
        />
      </Card>
    </>
  );
};

export default MyCard;
MyCard.propTypes = {
  post: PropTypes.object,
};
