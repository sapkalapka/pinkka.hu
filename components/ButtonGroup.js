import React, { useEffect, useState } from 'react';

const ButtonGroup = ({ title, data, setParentState }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (val) => {
    setSelectedOption(val.handle);
    setParentState(val);
  };

  return (
    <>
      <p className='mt-4'>{title}</p>
      <div className='flex gap-2 justify-evenly'>
        {data.map((item) => (
          <button
            key={item.handle}
            onClick={() => handleChange(item)}
            className={`${
              selectedOption === item.handle ? `bg-sky-400 text-black shadow-lg -translate-y-0.5` : `shadow-sm border`
            } px-2 py-1 rounded grow transition-all`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
