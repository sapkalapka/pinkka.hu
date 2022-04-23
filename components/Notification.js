import React, { useEffect } from 'react';

const Notification = ({ notification, setNotification }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setNotification(null);
        }, 1500);

        return () => clearTimeout(timer);
    }, [notification, setNotification]);

    return (
        <div
            className={`${
                notification === null
                    ? 'opacity-0 scale-y-0'
                    : 'opacity-100 scale-y-100'
            } fixed max-w-fit mx-auto transition-all top-12 inset-x-0 z-20 py-2 px-4 rounded shadow-lg text-white bg-green-500`}
        >
            {notification}
        </div>
    );
};

export default Notification;
