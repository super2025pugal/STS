import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  title,
  description,
  link,
  delay = 0,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > 60;

  const displayDescription = isLong && !expanded
    ? description.slice(0, 60) + '...'
    : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl shadow-md overflow-hidden bg-gray-100 transition-transform hover:scale-[1.015]"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <Link
            to={link}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs uppercase text-gray-500 tracking-wider mb-1">
          {category}
        </div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>  {/* Changed to gray-700 */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {displayDescription}
          {isLong && (
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="text-blue-600 hover:underline text-sm ml-1 focus:outline-none"
            >
              {expanded ? 'Show less' : 'Learn more'}
            </button>
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
