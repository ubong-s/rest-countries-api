import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page'>
      <div className='error-container'>
        <h1>Oops! Nothing here</h1>
        <Link to='/' className='btn btn-block'>
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
