import React from 'react';
import loadImage from '../loading.gif';

const Loading = () => {
  return (
    <div className='loader'>
      <img src={loadImage} alt='' />
    </div>
  );
};

export default Loading;
