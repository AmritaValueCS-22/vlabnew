import React, { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Theme Example</h1>
      <p>This is an example of a theme toggle.</p>
      <style jsx>{`
        
        .light {
          background-color: #ffffff;
          color: #000000;
        }
        .dark {
          background-color: #000000;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Theme;
