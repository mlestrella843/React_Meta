import React, { useState } from 'react';

function ChildComponent({ onSubmit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new Objet 'user' with name and age captured
    const newUser = { name, age: parseInt(age) || 0 };
    
    // Call  onSubmit function, passed as prop, to send the new user to ParentComponent
    onSubmit(newUser);
    
    // Clean form after sent data
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChildComponent;
