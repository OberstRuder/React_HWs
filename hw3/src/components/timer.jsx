import { useEffect, useState } from "react";

const Timer = ({s}) => {
    const [currentTime, setCurrentTime] = useState(s);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(interval);
                    return prevTime;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const formatNumber = (num) => (num < 10 ? `0${num}` : num);

        return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
    };

    return <div>{formatTime(currentTime)}</div>;
};

export default Timer;