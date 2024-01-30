const LCD = ({seconds}) => {
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
    
        const formatNumber = (num) => (num < 10 ? `0${num}` : num);
    
        return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
      };
    
      return <div>{formatTime(seconds)}</div>;
};

export default LCD;