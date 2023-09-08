import React from 'react';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div>
      
      <Helmet>
        <title>Tiêu đề Trang</title>
        <meta name="description" content="Mô tả trang cho SEO" />
        
        {/* Thẻ meta cho Facebook Open Graph */}
        <meta property="og:url" content="Home" />
        <meta property="og:type" content="Home" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:image" content="https://via.placeholder.com/800x400" />

        {/* Thẻ meta cho Twitter */}
        <meta name="twitter:card" content="Home" />
        <meta name="twitter:title" content="Home" />
        <meta name="twitter:description" content="Home" />
        <meta name="twitter:image" content="https://via.placeholder.com/800x400" />

        {/* Thêm các thẻ meta khác tùy chỉnh nếu cần */}
      </Helmet>
      <h1>Trang chủ</h1>
      <div>xin chao xin chao xin chao xin chao </div>
    </div>
  );
};

export default Home;