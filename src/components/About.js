import React from 'react';
import { Helmet } from 'react-helmet-async';


const About = () => {
  const title = 'About'
  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'en' }} title={title} meta={[
        {
          name: 'description',
          content: title,
        },
        {
          name: 'keywords',
          content: title
        },
      ]}
        links={[
          {
            rel: 'canonical',
            href: 'https://via.placeholder.com/300.png',
          },
        ]}
      />
      <h1>About</h1>
      <div>xin chao xin chao xin chao xin chao </div>
    </div>
  );
};

export default About;