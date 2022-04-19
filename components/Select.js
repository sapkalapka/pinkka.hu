import React, { useEffect, useState } from 'react';

const Dropdown = ({ options, setParentState }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (val) => {
    setSelectedOption(val);
    setParentState(val);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className='flex gap-2 justify-evenly'>
      {options.map((option) => (
        <button
          key={option}
          onClick={(e) => handleChange(e.target.innerText)}
          className={`${
            selectedOption === option
              ? `bg-sky-300 shadow-lg -translate-y-0.5`
              : `shadow-sm border`
          } px-2 py-1 rounded grow transition-all`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
