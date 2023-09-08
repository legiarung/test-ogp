import React from 'react';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Home</title>
        <meta name="title" content="Home" />
        <meta name="description" content="Home" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test-ogp-lime.vercel.app/collection" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://test-ogp-lime.vercel.app/collection" />
        <meta property="twitter:title" content="Home" />
        <meta property="twitter:description" content="Home" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Helmet>
      <h1>Trang chủ</h1>
      <div>xin chao xin chao xin chao xin chao </div>
    </div>
  );
};

export default Home;