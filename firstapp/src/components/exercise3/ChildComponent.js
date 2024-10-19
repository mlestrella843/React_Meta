import React, { useState } from 'react';

function ChildComponent({ onSubmit }) {
  // Child component state to manage input values
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Create a new user object with the input values
    const newUser = { name, age: parseInt(age) || 0 };

    // Call the onSubmit function passed from the parent and send the newUser object
    onSubmit(newUser);

    // Clear the input fields after submitting
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
