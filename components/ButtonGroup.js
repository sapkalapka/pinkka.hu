import React, { useState } from 'react';

const ButtonGroup = ({ title, active, data, onClick }) => {
    return (
        <>
            <p className="mt-4">{title}</p>
            <div className="flex gap-2 justify-evenly">
                {data.map((item) => (
                    <button
                        key={item.handle}
                        value={item.handle}
                        onClick={onClick}
                        className={`${
                            active === item.handle &&
                            `bg-sky-400 text-black -translate-y-0.5`
                        } shadow-sm border px-2 py-1 rounded grow transition-all`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ButtonGroup;
