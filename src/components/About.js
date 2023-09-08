import React from 'react';
import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    <div>
      <Helmet>
        <title>Tiêu đề Trang</title>
        <meta name="description" content="Mô tả trang cho SEO" />
        
        {/* Thẻ meta cho Facebook Open Graph */}
        <meta property="og:url" content="About" />
        <meta property="og:type" content="About" />
        <meta property="og:title" content="About" />
        <meta property="og:description" content="About" />
        <meta property="og:image" content="https://via.placeholder.com/300.png" />

        {/* Thẻ meta cho Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tiêu đề trang cho Twitter" />
        <meta name="twitter:description" content="Mô tả trang cho Twitter" />
        <meta name="twitter:image" content="https://via.placeholder.com/300.png" />

        {/* Thêm các thẻ meta khác tùy chỉnh nếu cần */}
      </Helmet>
      <h1>About</h1>
      <div>xin chao xin chao xin chao xin chao </div>
    </div>
  );
};

export default About;