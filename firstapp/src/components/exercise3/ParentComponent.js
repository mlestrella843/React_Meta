import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // The 'user' state is defined into Parent component.
  const [user, setUser] = useState({ name: '', age: 0 });

  return (
    <div>
      {/* The function onSubmit is passed as prop to ChildComponent */}
      <ChildComponent onSubmit={(newUser) => setUser(newUser)} />
      
      {/* Then the values name and age is showed into the ParentComponent */}
      <p>Current User: {user.name}, Age: {user.age}</p>
    </div>
  );
}
export default ParentComponent;