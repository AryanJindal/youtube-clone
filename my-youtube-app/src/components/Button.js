import React from 'react';

const Button = ({ name }) => {
  return (
    <div className='flex items-center mx-2'>
      <button className='px-4 py-2 bg-gray-500 rounded-full text-white whitespace-nowrap'>
        {name}
      </button>
    </div>
  );
};

export default Button;
