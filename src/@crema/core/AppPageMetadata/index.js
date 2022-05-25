import React from 'react';
import {useLocation} from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://ant-cra.cremawork.com/';

const defaultTitle = 'UZAMBS';
const defaultDescription =
  'Uzbekistan Association of Metabolic and Bariatric surgeons.';
const defaultImage = '%PUBLIC_URL%/assets/images/mainLogo.svg';
const defaultSep = ' | ';

const AppPageMetadata = ({children, ...rest}) => {
  const {pathname} = useLocation();
  const getMetaTags = (
    {
      title,
      description,
      image,
      contentType,
      noCrawl,
      published = '01-05-2022',
      updated,
      category = 'Admin Dashboard',
      tags = 'Admin Dashboard',
    },
    pathname,
  ) => {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : defaultImage;

    const metaTags = [
      {itemprop: 'name', content: theTitle},
      {itemprop: 'description', content: theDescription},
      {itemprop: 'image', content: theImage},
      {name: 'description', content: theDescription},
      {property: 'og:title', content: theTitle},
      {property: 'og:type', content: contentType || 'website'},
      {property: 'og:url', content: SITE_URL + pathname},
      {property: 'og:description', content: theDescription},
      {property: 'og:site_name', content: defaultTitle},
    ];

    if (noCrawl) {
      metaTags.push({name: 'robots', content: 'noindex, nofollow'});
    }

    if (published) {
      metaTags.push({name: 'article:published_time', content: published});
    }
    if (updated) {
      metaTags.push({name: 'article:modified_time', content: updated});
    }
    if (category) {
      metaTags.push({name: 'article:section', content: category});
    }
    if (tags) {
      metaTags.push({name: 'article:tag', content: tags});
    }

    return metaTags;
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          itemscope: undefined,
          itemtype: `http://schema.org/${rest.schema || 'Admin Template'}`,
        }}
        title={
          rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
        }
        link={[
          {
            rel: 'canonical',
            href: SITE_URL + pathname,
          },
        ]}
        meta={getMetaTags(rest, pathname)}
      />
      {children}
    </>
  );
};

export default AppPageMetadata;

AppPageMetadata.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};
