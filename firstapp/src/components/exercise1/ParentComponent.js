import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Ensure the correct path is used


function ParentComponent() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <ChildComponent count={count} increment={() => setCount(count + 1)} />
      </div>
    );
  }

  export default ParentComponent;