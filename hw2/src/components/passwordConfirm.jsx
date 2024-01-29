import { useState } from 'react';

const PasswordConfirm = ({min}) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmState, setConfirmState] = useState('')

    const passChange = (event) => {
        setPassword(event.target.value);
        checker(event);
        matchChecker(event.target.value, confirmPassword);
    };

    const confPassChange = (event) => {
        setConfirmPassword(event.target.value);
        checker(event);
        matchChecker(password, event.target.value);
    };

    const checker  = (e) => {
        if  (e.target.value.length < min)
        {
            e.target.style.backgroundColor = "red";
        }
        else {
            e.target.style.backgroundColor = "white";
        }
    };

    const matchChecker = (pass, confPass) => {
        if (pass > min && confPass > min) {
          if (pass === confPass) {
            setConfirmState('Passwords are the same');
          } else {
            setConfirmState('Passwords are different');
          }
        } else {
          setConfirmState('');
        }
    }

    return (
        <div>
            <p>Password:</p>
            <input type='password' onChange={passChange}/>
            <p>Password Confirm:</p>
            <input type='password' onChange={confPassChange}/>
            <p>{confirmState}</p>
        </div>
    );
};

export default  PasswordConfirm;