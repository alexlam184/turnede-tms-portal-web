import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo/turned-e-logo-zh.png';

const PageNotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white">
      <Link className="inline-block" to="/">
        <img className="block w-[300px]" src={Logo} alt="Logo" />
      </Link>
      <span>404 not found</span>
      {/* <Link className="inline-block" to="/">
        <span>back to sign in</span>
      </Link> */}
      <a href="/">back to sign in</a>
    </div>
  );
};

export default PageNotFound;
