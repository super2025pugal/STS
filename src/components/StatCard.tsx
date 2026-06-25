import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label, 
  suffix = '', 
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // ms
    const interval = 50; // ms
    const steps = duration / interval;
    const increment = value / steps;
    let current = 0;
    let timer: NodeJS.Timeout;
    
    const counter = () => {
      current += increment;
      if (current > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    };
    
    timer = setInterval(counter, interval);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-primary-950 mb-2">
        {count}{suffix}
      </div>
      <div className="text-neutral-600">{label}</div>
    </motion.div>
  );
};

export default StatCard;