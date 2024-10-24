

import React, { useEffect, useState } from 'react';

function ModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {

    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        if (prefersDark) {
        document.body.classList.add('dark-mode');
        }
    }, []);

  return (
    <div className="container mt-3">
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>
        Change to {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );

}
export default ModeToggle;