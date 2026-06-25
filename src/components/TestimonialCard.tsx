import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md p-6 relative "
    >
      <div className="absolute top-6 left-6 text-secondary-200">
        <Quote size={48} />
      </div>
      <div className="pt-8 pl-8 relative z-10">
        <p className="text-neutral-700 mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-semibold text-primary-950">{name}</p>
          <p className="text-neutral-600 text-sm">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;