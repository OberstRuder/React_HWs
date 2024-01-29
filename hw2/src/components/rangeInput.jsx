import {useState} from 'react';

const RangeInput = ({ min, max, ...restProps }) => {
    const [value, setValue] = useState('');

    const valueChanger = (event) => {
        setValue(event.target.value);

        const isOutOfRange = value.length < min || value.length > max;

        if (isOutOfRange) 
        {
            event.target.style.backgroundColor = "red";
        }
        else
        {
            event.target.style.backgroundColor = "white";
        }
    };

    return (
        <div>
            <input
                type="text"
                onChange={valueChanger}
                {...restProps}
            />
        </div>
  );


};

export default RangeInput;