const Watch = ({ seconds }) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return (
        <div className="Watch-cont">
            <img src={process.env.PUBLIC_URL + '/ClockFace.png'} alt="Watch" />
            <img src={process.env.PUBLIC_URL + '/ClockFace_H.png'} style={{rotate:  `${h * 30}deg`}} alt="Hours" />
            <img src={process.env.PUBLIC_URL + '/ClockFace_M.png'} style={{rotate:  `${m * 6}deg`}} alt="Minutes" />
            <img src={process.env.PUBLIC_URL + '/ClockFace_S.png'} style={{rotate:  `${s * 6}deg`}} alt="Seconds" />
        </div>
    );
};

export default Watch;