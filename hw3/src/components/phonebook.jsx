import React, { useState } from 'react';

const Phonebook = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(['']);

  const handleChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleAdd = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const handleRemove = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleMove = (index, direction) => {
    const newPhoneNumbers = [...phoneNumbers];
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    if (newIndex >= 0 && newIndex < newPhoneNumbers.length) {
      [newPhoneNumbers[index], newPhoneNumbers[newIndex]] = [newPhoneNumbers[newIndex], newPhoneNumbers[index]];
      setPhoneNumbers(newPhoneNumbers);
    }
  };

  return (
    <div>
      {phoneNumbers.map((phoneNumber, index) => (
        <div key={index}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button onClick={() => handleAdd()}>Add</button>
          {phoneNumbers.length > 1 && (
            <>
              <button onClick={() => handleRemove(index)}>Remove</button>
              <button onClick={() => handleMove(index, 'up')}>Move Up</button>
              <button onClick={() => handleMove(index, 'down')}>Move Down</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Phonebook;