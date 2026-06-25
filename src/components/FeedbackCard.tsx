// src/components/FeedbackCard.tsx
import React from 'react';

interface FeedbackCardProps {
  quote: string;
  name: string;
  company: string;
  position?: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ quote, name, company, position }) => {
  return (
    <div className="feedback-card bg-white p-6 rounded-lg shadow-lg">
      <blockquote className="italic text-neutral-600">“{quote}”</blockquote>
      <p className="mt-4 font-semibold">{name}</p>
      <p className="text-neutral-500">{position ? `${position}, ` : ''}{company}</p>
    </div>
  );
};

export default FeedbackCard;
