import React, {useEffect} from 'react';
import ProductImageSlide from './ProductImageSlide';
import {useDispatch, useSelector} from 'react-redux';
import AppCard from '../../../@crema/core/AppCard';
import Header from './Header';
import ProductView from './ProductView/index';
import SimilarProduct from './SimilarProduct';
import {getProductDetail} from '../../../redux/actions';
import {AppInfoView} from '../../../@crema';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const {currentProduct} = useSelector(({ecommerce}) => ecommerce);
  useEffect(() => {
    dispatch(getProductDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div className='product-detail'>
      <AppPageMetadata title='Product Details' />
      {currentProduct ? (
        <AppAnimateGroup type='bottom'>
          <AppCard key='product_detail'>
            <Header product={currentProduct} />
            <AppRowContainer>
              <Col sm={24} lg={8}>
                <ProductImageSlide product={currentProduct} />
              </Col>
              <Col sm={24} lg={16}>
                <ProductView product={currentProduct} />
              </Col>
            </AppRowContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimateGroup>
      ) : null}
      <AppInfoView />
    </div>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.object,
};
