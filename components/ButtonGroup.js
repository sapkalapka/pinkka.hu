import React, { useEffect, useState } from 'react';

const ButtonGroup = ({ title, options, setParentState }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (val) => {
    setSelectedOption(val);
    setParentState(val);
  };

  return (
    <>
      <p className='mt-4'>{title}</p>
      <div className='flex gap-2 justify-evenly'>
        {options.map((option) => (
          <button
            key={option.handle}
            onClick={() => handleChange(option.handle)}
            className={`${
              selectedOption === option.handle
                ? `bg-sky-600 shadow-lg -translate-y-0.5`
                : `shadow-sm border`
            } px-2 py-1 rounded grow transition-all`}
          >
            {option.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
