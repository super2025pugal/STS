import React from 'react';
import logoSHEI from '../components/logo.png'; // Adjust the path if needed

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
  src={logoSHEI}
  alt="SHEI Logo"
  className="h-14 w-14.5 object-contain mr-2 rounded-sm"
/>

<div>
  <div className="text-xl font-bold text-[#009fd1] leading-tight tracking-wide font-sans">
  SUDHARSAN HEAVY <br /> ENGINEERING INDUSTRY
  </div>
</div>

    </div>
  );
};

export default Logo;
