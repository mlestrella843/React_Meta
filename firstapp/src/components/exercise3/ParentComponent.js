import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // Parent component state to store user information
  const [user, setUser] = useState({ name: '', age: 0 });

  return (
    <div>
      <h1>Parent Component</h1>
      
      {/* Passing a function to ChildComponent via onSubmit prop */}
      <ChildComponent onSubmit={(newUser) => setUser(newUser)} />

      {/* Displaying the current user information */}
      <p>Current User: {user.name}, Age: {user.age}</p>
    </div>
  );
}

export default ParentComponent;