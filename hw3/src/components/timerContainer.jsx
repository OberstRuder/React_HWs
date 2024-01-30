import React, { useEffect, useState } from 'react';

const TimerContainer = ({ seconds, refresh, render: RenderComponent }) => {
    const [currentTime, setCurrentTime] = useState(seconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, refresh);

        return () => clearInterval(interval);
    }, [refresh]);

    return <RenderComponent seconds={currentTime} />;
};

export default TimerContainer;