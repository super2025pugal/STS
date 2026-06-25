import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  delay = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
    >
      <div className="text-secondary-500 mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-secondary-50 group-hover:bg-secondary-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary-950">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
      >
        Learn more 
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;