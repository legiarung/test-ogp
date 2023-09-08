import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/about">Giới thiệu</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;