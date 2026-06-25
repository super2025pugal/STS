import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ background: 'var(--off-white)' }}
  >
    <div className="text-center px-5">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
        style={{ background: 'rgba(232,160,32,0.15)' }}
      >
        <AlertTriangle className="w-8 h-8" style={{ color: 'var(--amber)' }} />
      </div>
      <div className="font-serif text-8xl font-bold text-navy mb-3" style={{ fontFamily: '"DM Serif Display", serif' }}>
        404
      </div>
      <h1 className="text-navy text-2xl font-bold mb-3">Page Not Found</h1>
      <p className="text-neutral-500 text-base mb-8 max-w-xs mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
