// src/components/Loader.tsx
import React from 'react';
import logo from '../components/logo.png'; // update this path if needed

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Optional: can change to match brand
      flexDirection: 'column',
    }}>
      <img src={logo} alt="Loading..." width="140" height="140" />
      {/* Optional spinning animation or text */}
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Loader;
