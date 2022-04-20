import React, { useEffect, useState } from 'react';

const ButtonGroupMultiselect = ({ title, options, parentState, setParentState }) => {
  const [clickedButton, setClickedButton] = useState([]);

  function handleClick(i) {
    setClickedButton((prev) => {
      if (prev.includes(i)) {
        return prev.filter((pi) => pi !== i);
      } else {
        return [...prev, i];
      }
    });
  }
  useEffect(() => {
    setParentState(clickedButton);
  }, [setParentState, clickedButton]);

  //   const handleChange = (option) => {
  //     if (parentState.includes(option.handle)) {
  //       setParentState((prev) => prev.filter((product) => product !== option.handle));
  //     } else {
  //       setParentState((prev) => [...prev, option.handle]);
  //     }
  //   };

  return (
    <>
      <p className='mt-4'>{title}</p>
      <div className='flex gap-2 justify-evenly'>
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`${
              clickedButton.includes(i) ? `bg-sky-600 text-white shadow-lg -translate-y-0.5` : `shadow-sm border`
            } px-2 py-1 rounded grow transition-all`}
          >
            {option.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonGroupMultiselect;
