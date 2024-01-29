import {useState} from 'react';

const LoginForm = ({onLogin}) => {
    const [loginValue, setLogin] = useState('');
    const [passValue, setPass] = useState('');

    const LoginChanger = (event) => {
        setLogin(event.target.value);
    }

    const PassChanger = (event) => {
        setPass(event.target.value);
    }

    let validButton = () => {
        if (loginValue.length >= 5 && passValue.length >= 5)
        {return true}
        else {return false};
    };

    return (
        <div>
            <input placeholder='enter login (min 5 chars)' onChange={LoginChanger} />
            <input placeholder='enter password (min 5 chars)' onChange={PassChanger} />
            <button onClick={() => onLogin(loginValue, passValue)} disabled={!validButton()}>Login</button>
        </div>
    )
};

export default LoginForm;